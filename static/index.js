(function(jszip, fileSaverSaveAs, tone) {
  const STATIC_ROOT = "";
  const AUDIO_DYNAMIC_RANGE_DB = 33;

  let AUDIO_INPUT = null;
  let AUDIO_TRANSCRIPTION = null;

  const FRESH_ROOT = `${STATIC_ROOT}cherries/fresh`;
  const FRESH_JIDS = ["beb17ca70917c6bcadec2b411e7530a1760a5441"];
  const FRESH_JID_TO_TITLE = {
    beb17ca70917c6bcadec2b411e7530a1760a5441: "The Weeknd - Blinding Lights"
  };

  const ROTTEN_ROOT = `${STATIC_ROOT}cherries/rotten`;
  const ROTTEN_JIDS = ["e2a5d5fbf9ac0b4b21953f36bb962b85a79555d0"];
  const ROTTEN_JID_TO_TITLE = {
    e2a5d5fbf9ac0b4b21953f36bb962b85a79555d0: "Input recording out of tune"
  };

  const RYY08_ROOT = `${STATIC_ROOT}ryy08_comparison/qualitative`;
  const RYY08_RWC_TAGS = [
    "pop-12",
    "pop-38",
    "pop-60",
    "pop-70",
    "pop-79",
    "genre-02",
    "genre-10",
    "genre-36",
    "genre-66",
    "genre-70"
  ];
  const RYY08_METHODS = ["ref", "mel", "spt", "ryy", "ssh", "ssj"];
  const RYY08_METHOD_TO_DISPLAY_HTML = {
    ref: "Author-transcribed reference",
    mel:
      '<a href="https://github.com/justinsalamon/audio_to_midi_melodia" target="_blank">Melody extraction + segmentation</a>',
    spt:
      '<a href="https://github.com/deezer/spleeter" target="_blank">Vocal isolation</a> + <a href="https://www.sonicvisualiser.org/tony/" target="_blank">Transcription</a>',
    ryy:
      '<a href="https://web.archive.org/web/20081115212058/http://www.cs.tut.fi/sgn/arg/matti/demos/mbctrans/" target="_blank">Features + HMM</a>',
    ssh:
      '<a href="https://github.com/magenta/magenta/blob/9885adef56d134763a89de5584f7aa18ca7d53b6/magenta/models/onsets_frames_transcription/data.py#L89" target="_blank">Spectrogram</a> + Transformer',
    ssj:
      'Sheet Sage (<a href="https://github.com/openai/jukebox" target="_blank">Jukebox</a> + Transformer)'
  };

  async function display(promises) {
    const previewSpinnerEl = document.getElementById("preview-loading");
    const previewEl = document.getElementById("preview");

    previewSpinnerEl.style.display = "block";
    previewEl.style.display = "none";

    const [
      inputAudioMP3,
      transcriptionAudioMP3,
      transcriptionScorePNG
    ] = await promises;
    console.log(inputAudioMP3);
    const inputAudio = `data:audio/mpeg;base64,${inputAudioMP3}`;
    const transcriptionAudio = `data:audio/mpeg;base64,${transcriptionAudioMP3}`;
    const transcriptionScore = `data:image/png;base64,${transcriptionScorePNG}`;
    await Promise.all([
      AUDIO_INPUT.load(inputAudio),
      AUDIO_TRANSCRIPTION.load(transcriptionAudio)
    ]);

    document.getElementById("score").src = transcriptionScore;

    previewSpinnerEl.style.display = "none";
    previewEl.style.display = "block";
  }

  function ryy08Promises(method, rwcTag) {
    function fetchBase64FromUri(uri) {
      return fetch(uri)
        .then(response => {
          return response.blob();
        })
        .then(
          blob =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onerror = reject;
              reader.onload = () => {
                const dataUrl = reader.result;
                const base64 = dataUrl.split(",")[1];
                resolve(base64);
              };
              reader.readAsDataURL(blob);
            })
        );
    }

    return Promise.all([
      fetchBase64FromUri(`${RYY08_ROOT}/${rwcTag}.mp3`),
      fetchBase64FromUri(`${RYY08_ROOT}/${rwcTag}_${method}_off1.mp3`),
      fetchBase64FromUri(`${RYY08_ROOT}/${rwcTag}_${method}_off1.png`)
    ]);
  }

  function cherryPromises(zipUri) {
    return fetch(zipUri)
      .then(response => {
        if (!response.ok) {
          throw "Failed to fetch";
        }
        return response.blob();
      })
      .then(zipBlob => {
        return jszip.loadAsync(zipBlob);
      })
      .then(zip => {
        return Promise.all([
          zip.file("input.mp3").async("base64"),
          zip.file("transcription.mp3").async("base64"),
          zip.file("transcription.png").async("base64")
        ]);
      });
  }

  async function onDomReady() {
    // Initialize audio chain
    AUDIO_INPUT = new tone.Player();
    AUDIO_TRANSCRIPTION = new tone.Player();
    const audioCrossfade = new tone.CrossFade(0.5);
    const audioVolume = new tone.Volume(0);
    AUDIO_INPUT.connect(audioCrossfade.a);
    AUDIO_TRANSCRIPTION.connect(audioCrossfade.b);
    audioCrossfade.connect(audioVolume);
    audioVolume.toDestination();

    // Initialize audio UI
    document.getElementById("audio-play").onclick = () => {
      const startTime = tone.now();
      AUDIO_INPUT.start(startTime);
      AUDIO_TRANSCRIPTION.start(startTime);
    };
    const crossfadeEl = document.getElementById("audio-crossfade");
    function onCrossfadeInput() {
      const crossfadeRel = crossfadeEl.value / crossfadeEl.max;
      audioCrossfade.fade.rampTo(crossfadeRel);
    }
    onCrossfadeInput();
    crossfadeEl.oninput = onCrossfadeInput;
    const volumeEl = document.getElementById("audio-volume");
    function onVolumeInput() {
      const volumeRel = volumeEl.value / volumeEl.max;
      if (volumeRel <= 0) {
        audioVolume.mute = true;
      } else {
        audioVolume.mute = false;
        audioVolume.volume.rampTo(
          (Math.min(volumeRel, 1) - 1) * AUDIO_DYNAMIC_RANGE_DB
        );
      }
    }
    onVolumeInput();
    volumeEl.oninput = onVolumeInput;

    // Populate cherry selectors
    const ripenesses = [
      ["fresh", FRESH_JIDS, FRESH_JID_TO_TITLE, FRESH_ROOT],
      ["rotten", ROTTEN_JIDS, ROTTEN_JID_TO_TITLE, ROTTEN_ROOT]
    ];
    for (let r = 0; r < ripenesses.length; ++r) {
      const [name, jids, jidToTitle, rootUri] = ripenesses[r];
      const selectEl = document.getElementById(`${name}-cherries`);
      const exampleTemplate = document.getElementById(`${name}-cherry-example`)
        .content;
      for (let i = 0; i < jids.length; ++i) {
        const jid = jids[i];
        const exampleEl = exampleTemplate
          .cloneNode(true)
          .querySelector("option");
        exampleEl.value = jid;
        exampleEl.innerHTML = jidToTitle[jid];
        exampleEl.selected = r == 0 && i == 0;
        selectEl.appendChild(exampleEl);
      }
      selectEl.oninput = () => {
        const selectedIndex = selectEl.selectedIndex;
        if (selectedIndex > 0) {
          const jid = selectEl.options[selectedIndex].value;
          const zipUri = `${rootUri}/${jid}.zip`;
          display(cherryPromises(zipUri));
        }
      };
    }

    // Populate ryy08 table
    const ryy08TableBodyEl = document.getElementById("ryy08-table-body");
    const ryy08MethodTemplate = document.getElementById("ryy08-method").content;
    const ryy08ExampleTemplate = document.getElementById("ryy08-example")
      .content;
    for (let i = 0; i < RYY08_METHODS.length; ++i) {
      const method = RYY08_METHODS[i];
      const methodEl = ryy08MethodTemplate.cloneNode(true);
      const methodNameEl = document.createElement("td");
      methodNameEl.innerHTML = RYY08_METHOD_TO_DISPLAY_HTML[method];
      methodEl.appendChild(methodNameEl);
      for (let j = 0; j < RYY08_RWC_TAGS.length; ++j) {
        const rwcTag = RYY08_RWC_TAGS[j];
        const exampleEl = ryy08ExampleTemplate.cloneNode(true);
        const inputEl = exampleEl.querySelector("input");
        inputEl.onchange = () => {
          display(ryy08Promises(method, rwcTag));
        };
        methodEl.appendChild(exampleEl);
      }
      ryy08TableBodyEl.appendChild(methodEl);
    }

    const defaultZipUri = `${FRESH_ROOT}/${FRESH_JIDS[0]}.zip`;
    display(cherryPromises(defaultZipUri));

    document.getElementById("body").style.display = "block";
    document.getElementById("body-loading").style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", onDomReady, false);
})(window.JSZip, window.saveAs, window.Tone);

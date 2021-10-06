window.mobileCheck = function() {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

(function(jszip, fileSaverSaveAs, tone) {
  const STATIC_ROOT = "https://chrisdonahue.com/sheetsage-lbd/";
  const AUDIO_DYNAMIC_RANGE_DB = 33;

  let AUDIO_INPUT = null;
  let AUDIO_TRANSCRIPTION_REF = null;
  let AUDIO_TRANSCRIPTION_EST = null;

  const FRESH_ROOT = `${STATIC_ROOT}cherries/hooktheory_test`;
  const FRESH_UIDS = [
    ["ZbgOKGNQgnY", "Jamiroquai - Space Cowboy"],
    ["nLgaWMLzoYp", "Johnny Clegg - Dela"],
    ["QLgnMbYvm-V", "Kelly Rowland - Work"],
    ["nZgWA-Awory", "King Crimson - In The Wake Of Poseidon"],
    ["ZbgOKN_bgnY", "Justice - Valentine"],
    ["YRzojlaMgDe", "The Cars - Just What I Needed"],
    ["ZwxKJqwDged", "Shontelle - Impossible"],
    ["Abm_dXGAgak", "The Chainsmokers - Closer ft. Halsey"],
    ["yvgPqrqYxYq", "Adele - Rolling In The Deep"],
    ["dZbgOqBwonY", "Van Morrison - Brown Eyed Girl"],
    ["KexENQwVo_B", "Black Eyed Peas - Rock That Body"],
    ["nvgy-Ew_gkA", "Rick Astley - Never Gonna Give You Up"],
    ["AaoGXKrJmeQ", "Mungo Jerry - In The Summertime"],
    ["lamkzMlVoDM", "Cher - Half Breed"],
    ["nJmBWEQbgAV", "B.E.R. - The Night Begins To Shine"],
    ["knJmBjQbmAV", "Birds Of Tokyo - Lanterns"],
    ["KexEeDBXx_B", "Rilo Kiley - Breakin Up"],
    ["yvmrlnWvxOW", "Daft Punk - Giorgio By Moroder"],
    ["kygzRODngKB", "Yasuharu Takanashi - Fairy Tail Main Theme"],
    ["AQodYy_YmDl", "Kyary Pamyu Pamyu - Harajuku Iyahoi"],
    ["ZwxKqeeGmed", "Toby Fox - Shop"],
    ["nvgyWWAeokA", "Mini Pati - Hirari Kirakira Yami Yami Museum"],
    [
      "-WeglnzlorY",
      "Florence And The Machine - Spectrum (Calvin Harris Remix)"
    ],
    ["nJmBvqe_mAV", "Utada Hikaru - Come Back To Me"],
    ["QLgnRMBvg-V", "Rustie - Hover Traps"],
    ["ROmNwDdQgNw", "Patrick Hernandez - Born To Be Alive"],
    ["DpgvvYekgad", "Armanarx - Syahrini Sticker Vs Armanarx Sticker"],
    ["WAbm_Ybwxak", "Masashi Hamauzu - Yeuls Theme"],
    ["ROmN-aRQoNw", "Rustie - Big Catzz"],
    ["VMgJvvAVgqK", "Daft Punk - Contact"],
    ["lamkNLYVoDM", "The Quiet Revolution - Parallel Me"],
    ["nZgWwk_Bgry", "Sanah - 2:00"],
    ["veoYqPLqodn", "Itzy - Wannabe"],
    ["jDgXkrvNmKl", "Counting Crows - Accidentally In Love"],
    ["veoYqYPVodn", "Matchbox 20 - Unwell"],
    ["d_gwjNYbmGV", "De Jeugd Van Tegenwoordig - Sterrenstof"],
    ["d_gwOYdKgGV", "Era - Ameno"],
    ["ZbgOaGXbonY", "A Teens - Halfway Around The World"],
    ["bWgMEaPEglX", "Antonim - Melancholy Soldier"],
    ["nLgaqEOZgYp", "Hirokazu Ando - Butter Building from Kirbys Adventure"],
    ["nJmBkArEgAV", "Santigold - The Keepers"],
    ["d_gwLQdbxGV", "Adele - Set Fire To The Rain"],
    ["kwxAaqNXxKG", "Ikimono Gakari - Blue Bird"],
    ["NlamkNNeoDM", "Erasure - Always"],
    ["eWxLnadKmaK", "Azedia - Something"],
    ["dVMgJMyWmqK", "Keane Vs Basto - Bend And Break"],
    ["l_NgbbVYgQA", "Avicii - Dear Boy"],
    ["jDgXqYWnxKl", "Toby Fox - Core"],
    ["kygzpzjPoKB", "Rilo Kiley - Breakin Up"],
    ["nJmBJQq_mAV", "Pitbull - Feel This Moment ft. Christina Aguilera"],
    ["DpgvNplLgad", "Mini Pati - Acha Cha Kare"],
    ["VMgJjqYygqK", "Linda Perhacs - Hey Who Really Cares"],
    ["ZwxKJLMDged", "Kyu Sakamoto - Sukiyaki"]
  ];
  const FRESH_DEFAULT = "ZbgOKGNQgnY";

  const ROTTEN_ROOT = `${STATIC_ROOT}cherries/hooktheory_test`;
  const ROTTEN_UIDS = [
    ["d_gw-dDKoGV", "Poor recall for some vocal styles"],
    ["kwxAaGaDxKG", "Poor recall for some vocal styles"],
    ["wnvgyyz-gkA", "Poor recall for some vocal styles"],
    ["yvgPKq_AmYq", "Poor recall for some vocal styles"],
    ["RPxen-ZLob_", "Oscillating between multiple instruments"],
    ["Rzoj_qYAmDe", "Oscillating between multiple instruments"],
    ["AQodyANqmDl", "Oscillating between multiple instruments"],
    ["WeglvbraorY", "Oscillating between melody and harmony"],
    [
      "YAg-qOnBgle",
      "Unpredictable behavior when input audio has poor intonation"
    ],
    [
      "bWgMwlkPolX",
      "Unpredictable behavior when input audio has poor intonation"
    ],
    ["yvgP_MyLmYq", "Sporadic octave tracking"],
    ["RPxeyqnqxb_", "Sporadic octave tracking"],
    ["lamkGvzvmDM", "Overly rhythmic"],
    ["eWxLvZakmaK", "Overly rhythmic"]
  ];

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
  const RYY08_METHODS = ["mel", "spt", "ryy", "ssh", "ssj"];
  const RYY08_METHOD_TO_DISPLAY_HTML = {
    mel:
      '<a href="https://github.com/justinsalamon/audio_to_midi_melodia" target="_blank">Melody extraction + Segmentation</a>',
    spt:
      '<a href="https://github.com/deezer/spleeter" target="_blank">Vocal isolation</a> + <a href="https://www.sonicvisualiser.org/tony/" target="_blank">Transcription</a>',
    ryy:
      '<a href="https://web.archive.org/web/20081115212058/http://www.cs.tut.fi/sgn/arg/matti/demos/mbctrans/" target="_blank">DSP features + HMM</a>',
    ssh:
      '<a href="https://github.com/magenta/magenta/blob/9885adef56d134763a89de5584f7aa18ca7d53b6/magenta/modsourcesets_frames_transcription/data.py#L89" target="_blank">Spectrogram</a> + Transformer',
    ssj:
      'Sheet Sage (<a href="https://github.com/openai/jukebox" target="_blank">Jukebox</a> + Transformer)'
  };

  async function display(promises) {
    const previewSpinnerEl = document.getElementById("preview-loading");
    const previewEl = document.getElementById("preview");

    previewSpinnerEl.style.display = "block";
    previewEl.style.display = "none";
    const now = tone.now();
    AUDIO_INPUT.stop(now);
    AUDIO_TRANSCRIPTION_REF.stop(now);
    AUDIO_TRANSCRIPTION_EST.stop(now);

    let successful = false;
    try {
      const [
        inputAudioMP3,
        transcriptionRefAudioMP3,
        transcriptionRefScorePNG,
        transcriptionEstAudioMP3,
        transcriptionEstScorePNG
      ] = await promises;
      const inputAudio = `data:audio/mpeg;base64,${inputAudioMP3}`;
      const transcriptionRefAudio = `data:audio/mpeg;base64,${transcriptionRefAudioMP3}`;
      const transcriptionRefScore = `data:image/png;base64,${transcriptionRefScorePNG}`;
      const transcriptionEstAudio = `data:audio/mpeg;base64,${transcriptionEstAudioMP3}`;
      const transcriptionEstScore = `data:image/png;base64,${transcriptionEstScorePNG}`;
      await Promise.all([
        AUDIO_INPUT.load(inputAudio),
        AUDIO_TRANSCRIPTION_REF.load(transcriptionRefAudio),
        AUDIO_TRANSCRIPTION_EST.load(transcriptionEstAudio)
      ]);
      document.getElementById("score-ref").src = transcriptionRefScore;
      document.getElementById("score-est").src = transcriptionEstScore;
      successful = true;
    } catch {
      alert("Failed to load example. Please try again or contact Chris.");
    }

    previewSpinnerEl.style.display = "none";
    if (successful) {
      previewEl.style.display = "block";
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100);
    }
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
      fetchBase64FromUri(`${RYY08_ROOT}/${rwcTag}_ref_off1.mp3`),
      fetchBase64FromUri(`${RYY08_ROOT}/${rwcTag}_ref_off1.png`),
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
          zip.file("transcription_ref.mp3").async("base64"),
          zip.file("transcription_ref.png").async("base64"),
          zip.file("transcription.mp3").async("base64"),
          zip.file("transcription.png").async("base64")
        ]);
      });
  }

  async function onDomReady() {
    // Initialize audio chain
    AUDIO_INPUT = new tone.Player();
    AUDIO_TRANSCRIPTION_REF = new tone.Player();
    AUDIO_TRANSCRIPTION_EST = new tone.Player();
    const transcriptionCrossfade = new tone.CrossFade(0);
    const inputTranscriptionCrossfade = new tone.CrossFade(0.5);
    const volume = new tone.Volume(0);
    AUDIO_INPUT.connect(inputTranscriptionCrossfade.a);
    AUDIO_TRANSCRIPTION_REF.connect(transcriptionCrossfade.a);
    AUDIO_TRANSCRIPTION_EST.connect(transcriptionCrossfade.b);
    transcriptionCrossfade.connect(inputTranscriptionCrossfade.b);
    inputTranscriptionCrossfade.connect(volume);
    volume.toDestination();

    // Initialize audio UI
    document.getElementById("audio-play").onclick = () => {
      const now = tone.now();
      AUDIO_INPUT.start(now);
      AUDIO_TRANSCRIPTION_REF.start(now);
      AUDIO_TRANSCRIPTION_EST.start(now);
    };
    document.getElementById("audio-stop").onclick = () => {
      const now = tone.now();
      AUDIO_INPUT.stop(now);
      AUDIO_TRANSCRIPTION_REF.stop(now);
      AUDIO_TRANSCRIPTION_EST.stop(now);
    };
    const transcriptionSourceEls = document.getElementsByName(
      "transcription-source"
    );
    function onTranscriptionSourceInput() {
      let rel = 0;
      for (let i = 0; i < transcriptionSourceEls.length; ++i) {
        if (transcriptionSourceEls[i].checked) {
          const isEst = Number(transcriptionSourceEls[i].value);
          if (isEst) {
            document.getElementById("score-ref").className = "score";
            document.getElementById("score-est").className =
              "score selected-transcription";
          } else {
            document.getElementById("score-ref").className =
              "score selected-transcription";
            document.getElementById("score-est").className = "score";
          }
          rel = isEst;
          break;
        }
      }
      transcriptionCrossfade.fade.rampTo(rel);
    }
    for (let i = 0; i < transcriptionSourceEls.length; ++i) {
      transcriptionSourceEls[i].oninput = onTranscriptionSourceInput;
    }
    onTranscriptionSourceInput();
    const crossfadeEl = document.getElementById("audio-crossfade");
    function onCrossfadeInput() {
      const crossfadeRel = crossfadeEl.value / crossfadeEl.max;
      inputTranscriptionCrossfade.fade.rampTo(crossfadeRel);
    }
    onCrossfadeInput();
    crossfadeEl.oninput = onCrossfadeInput;
    const volumeEl = document.getElementById("audio-volume");
    function onVolumeInput() {
      const volumeRel = volumeEl.value / volumeEl.max;
      if (volumeRel <= 0) {
        volume.mute = true;
      } else {
        volume.mute = false;
        volume.volume.rampTo(
          (Math.min(volumeRel, 1) - 1) * AUDIO_DYNAMIC_RANGE_DB
        );
      }
    }
    onVolumeInput();
    volumeEl.oninput = onVolumeInput;

    // Populate cherry selectors
    const ripenesses = [
      ["fresh", FRESH_UIDS, FRESH_ROOT],
      ["rotten", ROTTEN_UIDS, ROTTEN_ROOT]
    ];
    for (let r = 0; r < ripenesses.length; ++r) {
      const [name, uids, rootUri] = ripenesses[r];
      const selectEl = document.getElementById(`${name}-cherries`);
      const exampleTemplate = document.getElementById(`${name}-cherry-example`)
        .content;
      for (let i = 0; i < uids.length; ++i) {
        let uid = uids[i];
        let title;
        if (uid.length === 2) {
          [uid, title] = uid;
        } else {
          title = uid;
        }
        const exampleEl = exampleTemplate
          .cloneNode(true)
          .querySelector("option");
        exampleEl.value = uid;
        exampleEl.innerHTML = title;
        exampleEl.selected = uid === FRESH_DEFAULT;
        selectEl.appendChild(exampleEl);
      }
      selectEl.oninput = () => {
        const selectedIndex = selectEl.selectedIndex;
        if (selectedIndex > 0) {
          const jid = selectEl.options[selectedIndex].value;
          const otherSelectEl = document.getElementById(
            `${name === "fresh" ? "rotten" : "fresh"}-cherries`
          );
          otherSelectEl.selectedIndex = 0;
          const radioEls = document.getElementsByName("ryy08-radio");
          for (let b = 0; b < radioEls.length; ++b) {
            radioEls[b].checked = false;
          }
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
      const methodEl = ryy08MethodTemplate.cloneNode(true).querySelector("tr");
      const methodNameEl = document.createElement("td");
      methodNameEl.innerHTML = RYY08_METHOD_TO_DISPLAY_HTML[method];
      methodNameEl.className = "method-name";
      methodEl.appendChild(methodNameEl);
      for (let j = 0; j < RYY08_RWC_TAGS.length; ++j) {
        const rwcTag = RYY08_RWC_TAGS[j];
        const exampleEl = ryy08ExampleTemplate.cloneNode(true);
        const inputEl = exampleEl.querySelector("input");
        inputEl.onchange = () => {
          if (inputEl.checked) {
            display(ryy08Promises(method, rwcTag));
            document.getElementById("fresh-cherries").selectedIndex = 0;
            document.getElementById("rotten-cherries").selectedIndex = 0;
          }
        };
        methodEl.appendChild(exampleEl);
      }
      ryy08TableBodyEl.appendChild(methodEl);
    }

    if (FRESH_DEFAULT !== null) {
      const defaultZipUri = `${FRESH_ROOT}/${FRESH_DEFAULT}.zip`;
      display(cherryPromises(defaultZipUri));
    }

    if (window.mobileCheck()) {
      document.getElementById("mobile-warning").style.display = "block";
    }

    document.getElementById("body").style.display = "block";
    document.getElementById("body-loading").style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", onDomReady, false);
})(window.JSZip, window.saveAs, window.Tone);


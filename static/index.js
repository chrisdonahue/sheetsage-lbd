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
  const STATIC_ROOT = "";
  const AUDIO_DYNAMIC_RANGE_DB = 33;

  let AUDIO_INPUT = null;
  let AUDIO_TRANSCRIPTION = null;

  const FRESH_ROOT = `${STATIC_ROOT}cherries/fresh`;
  const FRESH_JIDS = [
    [
      "c634775f1d5fc319f3e204e753eae0c8e38bd737",
      "(2021, Hip hop, Male vox) Lil Nas X - Montero"
    ],
    [
      "e6d76b6903457ae67deb3e0ea81e9be3e729dfe8",
      "(2021, Pop, Female vox) Billie Eilish - Getting Older"
    ],
    [
      "dca819387f0f738ce8714ad58f7898b6a8b24259",
      "(2021, Pop, Male vox) BTS - Permission to Dance"
    ],
    [
      "0cd1f39dde78d2a9be7c0630aa11179e98f61b76",
      "(2021, Dance, Female vox) iyla - Strings"
    ],
    /*
    [
      "4a3e4ad581217ab0929576b1bc03fd4ef8649336",
      "(2021, Synth pop, Male vox) Bo Burnham - Content"
    ],
    */
    [
      "d1db2cd8bb50472e6eb44eb60ff2c28461917281",
      "(2020, Dance, Synth and female vox) KAYTRANADA - 10% ft. Kali Uchis"
    ],
    [
      "beb17ca70917c6bcadec2b411e7530a1760a5441",
      "(2020, Pop, Synth and male vox) The Weeknd - Blinding Lights"
    ],
    [
      "a3d7e584f103e056f10f932cf10947bd05a3e60e",
      "(2016, Soul, Male vox) Vulfpeck - Game Winner"
    ],
    /*
    [
      "56731ec77788cbd272dfef999060dc3cd3ce93f4",
      "(2015, Synth pop, Male vox) BEKIND - Down With the king"
    ],
    [
      "93ad79703e671815687d218b97e34d60b22c208e",
      "(2015, Showtune, Male vox) 'You'll Be Back' from 'Hamilton'"
    ],
    [
      "d6217e82e935c7cc3bf9b98d487266be61da15c6",
      "(2011, Bollywood, Male vox) 'Senorita' from 'Zindagi Na Milegi Dobara'"
    ],
    */
    [
      "4f0036820465c9987333eb398bad30c42f32d7bb",
      "(2005, Pop, Female vox) Gorillaz - DARE"
    ],
    [
      "b854a81c82e0e3e9473145373cf023ae35b5f67a",
      "(2001, EDM, Guitar) Daft Punk - Something About Us"
    ],
    [
      "6f0a216ed5e4bef6923a64b5b518fb14e161f30c",
      "(2000, EDM, Synth) Darude - Sandstorm"
    ],
    [
      "b0c7e56788d73018fb454229bbaee783225b1204",
      "(2000, Pop, Female vox) Britney Spears - Lucky"
    ],
    [
      "67f63d78150fc4c795a7b5df64373579df33ed20",
      "(1998, Bollywood, Female vox) Title track from 'Kuch Kuch Hota Hai'"
    ],
    [
      "078f7dba522bf89f15e1c103f71c54e632dc3495",
      "(1996, Alt rock, Male vox) Oasis - Champagne Supernova"
    ],
    [
      "8d3802805964b9365151b0bec7e6c6640fe6b828",
      "(1989, 8-bit, Synth) Hirokazu Tanaka - Tetris Type A"
    ],
    [
      "d55197cffcbc304a7c87df1bb214ef570652102a",
      "(1984, Pop rock, Male vox) Queen - I Want To Break Free"
    ],
    [
      "8b41011016ea784a5374bdfd28fd03ebf4b9920f",
      "(1980, Pop, Female vox) Miki Matsubara - Stay With me"
    ],
    /*
    [
      "883009cf626be78354d7edb1732ddd83dcdf02c8",
      "(1977, Folk rock, Male vox) Fleetwood Mac - Second Hand News"
    ],
    */
    [
      "fb5a7ccb3b3471f28ff12d318adff48a6477f2be",
      "(1977, Folk rock, Female vox) Fleetwood Mac - Dreams"
    ],
    [
      "f38e464aeac5a13f0bd02e2d2a50d64984cb5d17",
      "(1972, Funk, Male vox) Stevie Wonder - Superstition"
    ],
    /*
    [
      "0b26f0eda0bce29029fd40f8371d923239b6a984",
      "(1970, Folk rock, Male vox) Crosby, Stills, Nash & Young - Our House"
    ],
    */
    [
      "d467451831f01d8b4f905e9cec7582b5579b7ac2",
      "(1966, Psych pop, Male vox / woodwinds / theremin) Beach Boys - I Just Wasn't Made For These Times"
    ],
    [
      "de4f0b22f6a5cb6443adbb52c0ea422c2fa3dc67",
      "(1953, Jazz, Saxophone) Charlie Parker - All The Things You Are"
    ],
    [
      "a0cf33add7cde22a570570aad5d02160987a541f",
      "(1875, Classical, Full orchestra) Grieg - In the Hall of the Mountain King"
    ],
    [
      "c40f0e2c818057290013e3e5fc16ac95005857f8",
      "(1722, Classical, Solo piano) Bach - Prelude No 2. in C Minor (BWV 847)"
    ]
  ];
  const FRESH_DEFAULT = "beb17ca70917c6bcadec2b411e7530a1760a5441";

  const ROTTEN_ROOT = `${STATIC_ROOT}cherries/rotten`;
  const ROTTEN_JIDS = [
    ["f1939a467c09f6d23ab10208710747e9890a1fdb", "Overly rhythmic"],
    ["74a94d700d65a8e7a8629d4278372f162b36e50f", "Overly rhythmic"],
    [
      "a1e0b832fd1dfa6a3dcd35b2db1624e13635c5b9",
      "Inconsistent transcriptions when input recording out of tune"
    ],
    [
      "e2a5d5fbf9ac0b4b21953f36bb962b85a79555d0",
      "Inconsistent transcriptions when input recording out of tune"
    ],
    ["708b4bd04a33f2de4fcba52320fd5fb2dba1f0b4", "Octave indecision"],
    ["5b7616ae6e9ad035a93c5ec0975e72ff387b73fd", "Octave indecision"],
    [
      "4b0e64e72fc8a5c7b3880f126e59c7dc65f0e2b0",
      "Issues tracking melody when multiple monophonic voices present"
    ],
    [
      "4f1eabb53b972a7fe19b2e99c4a2ebbe7d05e32c",
      "Poor recall for quiet vocals"
    ],
    [
      "b49d21cc3cad2f000215f2f3db6badc1551e7ad2",
      "Detected wrong time signature"
    ]
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
  const RYY08_METHODS = ["ref", "mel", "spt", "ryy", "ssh", "ssj"];
  const RYY08_METHOD_TO_DISPLAY_HTML = {
    ref: "Author-transcribed reference",
    mel:
      '<a href="https://www.upf.edu/web/mtg/melodia" target="_blank">Melody extraction</a> + <a href="https://github.com/justinsalamon/audio_to_midi_melodia" target="_blank">Segmentation</a>',
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
    const now = tone.now();
    AUDIO_INPUT.stop(now);
    AUDIO_TRANSCRIPTION.stop(now);

    let successful = false;
    try {
      const [
        inputAudioMP3,
        transcriptionAudioMP3,
        transcriptionScorePNG
      ] = await promises;
      const inputAudio = `data:audio/mpeg;base64,${inputAudioMP3}`;
      const transcriptionAudio = `data:audio/mpeg;base64,${transcriptionAudioMP3}`;
      const transcriptionScore = `data:image/png;base64,${transcriptionScorePNG}`;
      await Promise.all([
        AUDIO_INPUT.load(inputAudio),
        AUDIO_TRANSCRIPTION.load(transcriptionAudio)
      ]);
      document.getElementById("score").src = transcriptionScore;
      successful = true;
    } catch {
      alert("Failed to load example for some reason. Please contact Chris.");
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
      const now = tone.now();
      AUDIO_INPUT.start(now);
      AUDIO_TRANSCRIPTION.start(now);
    };
    document.getElementById("audio-stop").onclick = () => {
      const now = tone.now();
      AUDIO_INPUT.stop(now);
      AUDIO_TRANSCRIPTION.stop(now);
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
      ["fresh", FRESH_JIDS, FRESH_ROOT],
      ["rotten", ROTTEN_JIDS, ROTTEN_ROOT]
    ];
    for (let r = 0; r < ripenesses.length; ++r) {
      const [name, jids, rootUri] = ripenesses[r];
      const selectEl = document.getElementById(`${name}-cherries`);
      const exampleTemplate = document.getElementById(`${name}-cherry-example`)
        .content;
      for (let i = 0; i < jids.length; ++i) {
        const [jid, title] = jids[i];
        const exampleEl = exampleTemplate
          .cloneNode(true)
          .querySelector("option");
        exampleEl.value = jid;
        exampleEl.innerHTML = title;
        exampleEl.selected = jid === FRESH_DEFAULT;
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

    const defaultZipUri = `${FRESH_ROOT}/${FRESH_DEFAULT}.zip`;
    display(cherryPromises(defaultZipUri));

    if (window.mobileCheck()) {
      document.getElementById("mobile-warning").style.display = "block";
    }

    document.getElementById("body").style.display = "block";
    document.getElementById("body-loading").style.display = "none";
  }

  document.addEventListener("DOMContentLoaded", onDomReady, false);
})(window.JSZip, window.saveAs, window.Tone);

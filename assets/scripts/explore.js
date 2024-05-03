// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voiceSelect = document.querySelector('select');
  let button = document.querySelector('button');
  let image = document.querySelector("img");
  let synth = window.speechSynthesis;
  let utterThis = new SpeechSynthesisUtterance();

  let voices = []

  function populateVoiceList() {  
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", function() {
    let text = document.getElementById("text-to-speak");
    utterThis.text = text.value;
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
  });

  utterThis.addEventListener("start", function() {
    image.src = "assets/images/smiling-open.png";
  });
  
  utterThis.addEventListener("end", function() {
    image.src = "assets/images/smiling.png";
  });
}
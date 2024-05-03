// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let voiceSelect = document.querySelector('select');
  let button = document.querySelector('button');
  let image = document.querySelector("img");
  let utterThis = new SpeechSynthesisUtterance("");

  function populateVoiceList() {  
    const voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voiceSelect").appendChild(option);
    }
  }
  populateVoiceList();

  voiceSelect.addEventListener("change", function() {
    utterThis.voice = voiceSelect.value;
  });

  button.addEventListener("click", function() {
    let text = document.getElementById("text-to-speak");
    utterThis.text = text.value;

    synth.speak(utterThis);
  });

  utterThis.addEventListener("start", function() {
    image.src = "assets/images/smiling-open.png";
  });
  
  utterThis.addEventListener("end", function() {
    image.src = "assets/images/smiling.png";
  });
}
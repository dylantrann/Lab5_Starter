// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let select = document.getElementById("horn-select");
  let volume = document.getElementById("volume")
  let image = document.querySelector('img');
  let audio = document.querySelector('audio');
  let button = document.querySelector('button');
  let volImg = document.querySelector("[alt='Volume level 2']");
  const jsConfetti = new JSConfetti();

  select.addEventListener("change", function() {
    let curr = select.value;
    switch (curr) {
      case "air-horn":
        image.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        image.src = "assets/images/car-horn.svg"
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        image.src = "assets/images/party-horn.svg"
        audio.src = "assets/audio/party-horn.mp3";
        break;
      default:
        image.src = "assets/images/no-image.png"
    }
  });

  volume.addEventListener("change", function() {
    let curr = volume.value;
    if (curr == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
    }
    else if (curr > 0 && curr < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    }
    else if (curr >= 33 && curr < 66) {
      volImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volImg.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = curr/100;
  });

  button.addEventListener("click", function() {
    audio.play();

    if (select.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
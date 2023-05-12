const playButton = document.querySelector("#play");
const audio = new Audio("./audio.mp3");
let isPlaying = false;

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playButton.innerHTML = 'PLAY';
  } else {
    audio.play();
    playButton.innerHTML = 'PAUSE';
  }
  isPlaying = !isPlaying;
}

playButton.addEventListener("click", togglePlayPause);


const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500;
const breatheTime = (totalTime/5) * 2;
const holdTime = totalTime/5;

breatheAnimation();
function breatheAnimation() {
    text.innerHTML = "BREATHE IN!!";
    container.className = "container grow";

    setTimeout( ()=> {
        text.innerText = "HOLD!!";
        setTimeout ( ()=> {
            text.innerText = "BREATHE OUT!!"
            container.className = "container shrink";
        }, holdTime)
    }, breatheTime)
}
setInterval(breatheAnimation, totalTime);

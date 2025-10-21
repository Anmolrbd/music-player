const slider = document.getElementById("slider");
const audiotrack = document.getElementById("audiotrack");
const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn");
const innerplay = document.getElementById("innerplay");
const innerpause = document.getElementById("innerpause");


playbtn.addEventListener('click', () => {
  audiotrack.play();
  innerplay.classList.add("hidden");
  innerpause.classList.remove("hidden");
});


pausebtn.addEventListener('click', () => {
  audiotrack.pause();
  innerpause.classList.add("hidden");
  innerplay.classList.remove("hidden");
});


audiotrack.addEventListener('timeupdate', () => {
  if (!isNaN(audiotrack.duration)) {
    const percent = (audiotrack.currentTime / audiotrack.duration) * 100;
    slider.value = percent;
  }
});


slider.addEventListener('input', () => {
  if (!isNaN(audiotrack.duration)) {
    const newTime = (slider.value / 100) * audiotrack.duration;
    audiotrack.currentTime = newTime;

    
    if (!audiotrack.paused) audiotrack.play();
  }
});


slider.addEventListener('change', () => {
  if (!isNaN(audiotrack.duration)) {
    audiotrack.currentTime = (slider.value / 100) * audiotrack.duration;
  }
});

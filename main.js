const slider = document.getElementById("slider");
const audiotrack = document.getElementById("audiotrack");
const playbtn = document.getElementById("playbtn");
const pausebtn = document.getElementById("pausebtn")
const innerplay = document.getElementById("innerplay");
const innerpause = document.getElementById("innerpause");

playbtn.addEventListener('click',()=>{
    audiotrack.play();
    innerplay.className += " hidden";
    innerpause.classList.remove("hidden");
})
pausebtn.addEventListener('click',()=>{
    audiotrack.pause();
    innerpause.className += " hidden";
    innerplay.classList.remove("hidden");
})


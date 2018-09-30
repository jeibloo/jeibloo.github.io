var rand1 = document.querySelector('#bar_x1');
function setProperty(duration){
  rand1.style.setProperty('--animation-time', duration+'s')
}
function changeAnimTime() {
  var animDur = Math.random();
  setProperty(animDur);
}

setInt(changeAnimTime, 1000);

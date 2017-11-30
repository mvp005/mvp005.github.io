function loadWalking() {
  let human = document.getElementById("movement");
  let html = '';
  const SCALE = 50;
  var DIST = 0.3;
  var currentDist; // Relative Location
  var currentTime;
  for (var i = 0; i < 20; i += 1) {
    html += `<a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= ".05 1 ` + (-i*DIST*4).toString() + `" to="0 1.1 ` + (-i*4*DIST - DIST).toString() + `" begin = "` +  (3000 + i * 4 * SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0.0 1.1 ` + (-i*DIST*4 - DIST).toString() + `" to= "-.05 1 ` + (-i*4*DIST - DIST * 2).toString() + `" begin = "` +  (3000 + i * 4 * SCALE + SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= "-.05 1 ` + (-i*DIST*4 - DIST * 2).toString() + `" to="0 1.1 ` + (-i*4*DIST - DIST * 3).toString() + `" begin = "` +  (3000 + i * 4 * SCALE + SCALE * 2).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0 1.1 ` + (-i*DIST*4 - DIST * 3).toString() + `" to= ".05 1 ` + (-i*4*DIST - DIST * 4).toString() + `" begin = "` +  (3000 + i * 4 * SCALE + SCALE * 3).toString() + `"></a-animation>`
    currentDist = i*4*DIST + DIST * 4;
    currentTime = 3000 + i * 4 * SCALE + SCALE * 3;
  }
  
  DIST = 0.15;
  const DEPTH = .03;
  var curentHeight2;
  var currentDist2; // Absolute Location (negative)
  var currentTime2;
  for (var i = 0; i < 20; i += 1) {
    html += `<a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= ".05 ` + (1-i*DEPTH) + ` ` + (-i*DIST*4 - currentDist).toString() + `" to="0 ` + (1.1-i*DEPTH) + ` ` + (-i*4*DIST - DIST - currentDist).toString() + `" begin = "` +  (currentTime + 5000 + i * 4 * SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0.0 ` + (1.1-i*DEPTH) + ` ` + (-i*DIST*4 - DIST - currentDist).toString() + `" to= "-.05 ` + (1-i*DEPTH) + ` ` + (-i*4*DIST - DIST * 2 - currentDist).toString() + `" begin = "` +  (currentTime + 5000 + i * 4 * SCALE + SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= "-.05 ` + (1-i*DEPTH) + ` ` + (-i*DIST*4 - DIST * 2 - currentDist).toString() + `" to="0 ` + (1.1-i*DEPTH) + ` ` + (-i*4*DIST - DIST * 3 - currentDist).toString() + `" begin = "` +  (currentTime + 5000 + i * 4 * SCALE + SCALE * 2).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0 ` + (1.1-i*DEPTH) + ` ` + (-i*DIST*4 - DIST * 3 - currentDist).toString() + `" to= ".05 ` + (1-i*DEPTH) + ` ` + (-i*4*DIST - DIST * 4 - currentDist).toString() + `" begin = "` +  (currentTime + 5000 + i * 4 * SCALE + SCALE * 3).toString() + `"></a-animation>` 
    currentDist2 = -i*4*DIST - DIST * 4 - currentDist;
    currentTime2 = currentTime + 5000 + i * 4 * SCALE + SCALE * 3;
  }
  var currentX = 0.5;
  var currentY = 
  for (var i = 0; i < 20; i += 1) {
    var x = 
  }
  <a-animation attribute="position" dur="1000" to=""></a-animation>

  human.innerHTML = html;
}


var event = document.createEvent('Event');
event.initEvent('build', true, true)

let counter = 0;

function playSounds() {
  if (counter >= 1) {
    document.getElementById("windy3").components.sound.playSound();
  }
  console.log(counter);
  counter += 1;
}

setInterval(playSounds, 500);
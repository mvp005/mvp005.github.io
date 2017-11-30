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
  var currentHeight2;
  var currentDist2; // Absolute Location (negative)
  var currentTime2;
  for (var i = 0; i < 20; i += 1) {
    html += `<a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= ".05 ` + (1-i*DEPTH) + ` ` + (-i*DIST*4 - currentDist).toString() + `" to="0 ` + (1.1-i*DEPTH) + ` ` + (-i*4*DIST - DIST - currentDist).toString() + `" begin = "` +  (currentTime + 5000 + i * 4 * SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0.0 ` + (1.1-i*DEPTH) + ` ` + (-i*DIST*4 - DIST - currentDist).toString() + `" to= "-.05 ` + (1-i*DEPTH) + ` ` + (-i*4*DIST - DIST * 2 - currentDist).toString() + `" begin = "` +  (currentTime + 5000 + i * 4 * SCALE + SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= "-.05 ` + (1-i*DEPTH) + ` ` + (-i*DIST*4 - DIST * 2 - currentDist).toString() + `" to="0 ` + (1.1-i*DEPTH) + ` ` + (-i*4*DIST - DIST * 3 - currentDist).toString() + `" begin = "` +  (currentTime + 5000 + i * 4 * SCALE + SCALE * 2).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0 ` + (1.1-i*DEPTH) + ` ` + (-i*DIST*4 - DIST * 3 - currentDist).toString() + `" to= ".05 ` + (1-i*DEPTH) + ` ` + (-i*4*DIST - DIST * 4 - currentDist).toString() + `" begin = "` +  (currentTime + 5000 + i * 4 * SCALE + SCALE * 3).toString() + `"></a-animation>` 
    currentDist2 = -i*4*DIST - DIST * 4 - currentDist;
    currentTime2 = currentTime + 5000 + i * 4 * SCALE + SCALE * 3;
    currentHeight2 = 1-i*DEPTH;
  }
  
  var currentX = 0.5;
  var currentY = currentHeight2;
  var rotateX = 0;
  var rotateY = 3;
  var X = currentX - rotateX;
  var Y = currentY - rotateY;
  var rotateScale = 25;
  var prevX = X * Math.cos(0) - Y * Math.sin(0) + rotateX;
  var prevY = Y * Math.cos(0) + X * Math.sin(0) + rotateY;
  var currentTime3;
  for (var i = 0; i < 200; i += 1) {
    var theta = Math.cos(Math.PI * i / 30);
    var x = X * Math.cos(theta) - Y * Math.sin(theta) + rotateX;
    var y = Y * Math.cos(theta) + X * Math.sin(theta) + rotateY;
    console.log(x, y);
    html += `<a-animation easing="linear" attribute="position" dur="` + rotateScale.toString() + `" from="` + prevX.toString() + ` ` + prevY.toString() + ` ` + currentDist2.toString() + `" to="` + x.toString() + ` ` + y.toString() + ` ` + currentDist2.toString() + `" begin = "` + (currentTime2 + i*rotateScale).toString() + `"></a-animation>`;
    prevX = x;
    prevY = y;
    currentTime3 = currentTime2 + i*rotateScale;
  }
  
  html += `<a-animation easing="ease-in-cubic" attribute="position" dur="7000" from= "` + prevX.toString() + ` ` + prevY.toString() + ` ` + currentDist2.toString() + `" to="` + prevX.toString() + `-30` + ` ` + currentDist2.toString() + `" begin = "` +  (currentTime3 + 25).toString() + `"></a-animation>`

  human.innerHTML = html;
}

let counter = 0;

function playSounds() {
  if (counter >= 1) {
    document.getElementById("windy3").components.sound.playSound();
  }
  //console.log(counter);
  counter += 1;
}

setInterval(playSounds, 500);
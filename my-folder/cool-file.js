function loadWalking() {
  let human = document.getElementById("movement");
  let html = '';
  const SCALE = 500;
  var DIST = 0.3;
  for (var i = 0; i < 20; i += 1) {
    html += `<a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= ".05 1 ` + (-i*DIST*4).toString() + `" to="0 1.1 ` + (-i*4*DIST - DIST).toString() + `" begin = "` +  (3000 + i * 4 * SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0.0 1.1 ` + (-i*DIST*4 - DIST).toString() + `" to= "-.05 1 ` + (-i*4*DIST - DIST * 2).toString() + `" begin = "` +  (3000 + i * 4 * SCALE + SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= "-.05 1 ` + (-i*DIST*4 - DIST * 2).toString() + `" to="0 1.1 ` + (-i*4*DIST - DIST * 3).toString() + `" begin = "` +  (3000 + i * 4 * SCALE + SCALE * 2).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0 1.1 ` + (-i*DIST*4 - DIST * 3).toString() + `" to= ".05 1 ` + (-i*4*DIST - DIST * 4).toString() + `" begin = "` +  (3000 + i * 4 * SCALE + SCALE * 3).toString() + `"></a-animation>`
  }
  
  DIST = 0.15;
  for (var i = 20; i < 40; i += 1) {
    html += `<a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= ".05 1 ` + (-i*DIST*4).toString() + `" to="0 1.1 ` + (-i*4*DIST - DIST).toString() + `" begin = "` +  (10000 + i * 4 * SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0.0 1.1 ` + (-i*DIST*4 - DIST).toString() + `" to= "-.05 1 ` + (-i*4*DIST - DIST * 2).toString() + `" begin = "` +  (10000 + i * 4 * SCALE + SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-in-sine" attribute="position" dur="` + SCALE.toString() + `" from= "-.05 1 ` + (-i*DIST*4 - DIST * 2).toString() + `" to="0 1.1 ` + (-i*4*DIST - DIST * 3).toString() + `" begin = "` +  (10000 + i * 4 * SCALE + SCALE * 2).toString() + `"></a-animation>
    <a-animation easing="ease-out-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0 1.1 ` + (-i*DIST*4 - DIST * 3).toString() + `" to= ".05 1 ` + (-i*4*DIST - DIST * 4).toString() + `" begin = "` +  (10000 + i * 4 * SCALE + SCALE * 3).toString() + `"></a-animation>` 
  }

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
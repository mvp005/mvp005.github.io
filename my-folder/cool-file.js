function loadWalking() {
  let human = document.getElementById("movement");
  let html = '';
  const SCALE = 500;
  const DIST = 0.5;
  for (var i = 0; i < 20; i += 1) {
    html += `<a-animation easing="ease-sine" attribute="position" dur="` + SCALE.toString() + `" from= " .05 1 ` + (-i*2).toString() + `" to="0 1.1 ` + (-i*2 - DIST).toString() + `" begin = "` +  (i * 2).toString() + `"></a-animation>
    <a-animation easing="ease-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0.0 1.1 ` + (-i*2 - DIST).toString() + `" to= "-.05 1 ` + (-i*2 - DIST * 2).toString() + `" begin = "` +  (i * 2 + SCALE).toString() + `"></a-animation>
    <a-animation easing="ease-sine" attribute="position" dur="` + SCALE.toString() + `" from= "-.05 1 ` + (-i*2 - DIST * 2).toString() + `" to="0 1.1 ` + (-i*2 - DIST * 3).toString() + `" begin = "` +  (i * 2 + SCALE * 2).toString() + `"></a-animation>
    <a-animation easing="ease-sine" attribute="position" dur="` + SCALE.toString() + `" from= "0 1.1 ` + (-i*2 - DIST * 3).toString() + `" to= ".05 1 ` + (-i*2 - DIST * 4).toString() + `" begin = "` +  (i * 2 + SCALE * 3).toString() + `"></a-animation>`
  }

  human.innerHTML = html;
}
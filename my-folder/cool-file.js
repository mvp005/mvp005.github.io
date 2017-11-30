let human = document.getElementById("movement");
let html = '';
for (var i = 0; i < 20; i += 1) {
  html += `
  <a-animation easing="ease-sine" attribute="position" dur="500" from= " .05 1 0" to="0 1.1 -.5" begin = "0000"></a-animation>
  <a-animation easing="ease-sine" attribute="position" dur="500" from= "0.0 1.1 -.5" to= "-.05 1 -1" begin = "500"></a-animation>
  <a-animation easing="ease-sine" attribute="position" dur="500" from= "-.05 1 -1" to="0 1.1 -1.5" begin = "1000"></a-animation>
  <a-animation easing="ease-sine" attribute="position" dur="500" from= "0 1.1 -1.5" to= ".05 1 -2" begin = "1500"></a-animation>
``
}
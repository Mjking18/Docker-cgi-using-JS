function lw() {
  var i = document.getElementById("input").value;
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://192.168.43.229/cgi-bin/docker.py?cmd=" + i, true);
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}

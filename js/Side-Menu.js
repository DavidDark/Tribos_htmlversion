function shiftcontent(evt, section) {
  var i, wrap, shift;
  var sct = document.getElementById(section).id;
  wrap = document.getElementsByClassName("wrap");
  for (i = 0; i < wrap.length; i++) {
    wrap[i].style.display = "none";
  }
  shift = document.getElementsByClassName("shift");
  for (i = 0; i < shift.length; i++) {
    shift[i].className = shift[i].className.replace(" active", "");
  }
  document.getElementById('Nosotros').style.display = "none";
  document.getElementById(section).style.display = "block";

  if (sct === "Historia") {
    document.getElementById("container-fluid").style.backgroundImage = "url(assets/FONDO_HISTORIA.png)";
  }
  if (sct === "Mision") {
    document.getElementById("container-fluid").style.backgroundImage = "url(assets/FONDO_MISION.png)";
  }
  if (sct === "Vision") {
    document.getElementById("container-fluid").style.backgroundImage = "url(assets/FONDO_VISION.png)";
  }
  if (sct === "Escencia") {
    document.getElementById("container-fluid").style.backgroundImage = "url(assets/FONDO_ESENCIA.png)";
  }
  if (sct === "Cronograma") {
    document.getElementById("container-fluid").style.backgroundImage = "url(assets/FONDO_CRONOGRAMA.png)";
  }
  if (sct === "Premios") {
    document.getElementById("container-fluid").style.backgroundImage = "url(assets/FONDO_PREMIOS.png)";
  }
  evt.currentTarget.className += " active";
}
function shiftcontent(evt, section) {
  var i,j, wrap, shift;
  var sct = document.getElementById(section).id;
  wrap = document.getElementsByClassName("wrap");
  for (i = 0; i < wrap.length-2; i++) {
    wrap[i].style.display = "none";
  }
  shift = document.getElementsByClassName("shift");
  for (i = 0; i < shift.length; i++) {
    shift[i].className = shift[i].className.replace(" active", "");
    document.getElementById('menu_logo').src='assets/LOGO_TRIBOS_anim.gif';
    document.getElementById("Side-Menu").style.color = "white";
    try{
      document.getElementById('topnav-b').id ='topnav';
    }catch(error){}
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
    document.getElementById('menu_logo').src='assets/LOGO_TRIBOS_anim_black.gif';
    document.getElementById("Side-Menu").style.color = "black";
    document.getElementById('topnav').id ='topnav-b';

  }
  evt.currentTarget.className += " active";
}
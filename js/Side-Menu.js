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
    document.getElementById("body").style.backgroundImage = "url(assets/FONDO_HISTORIA.jpg)";
  }
  if (sct === "Mision") {
    document.getElementById("body").style.backgroundImage = "url(assets/FONDO_MISION.jpg)";
  }
  if (sct === "Vision") {
    document.getElementById("body").style.backgroundImage = "url(assets/FONDO_VISION.jpg)";
  }
  if (sct === "Escencia") {
    document.getElementById("body").style.backgroundImage = "url(assets/FONDO_ESENCIA.jpg)";
  }
  if (sct === "Cronograma") {
    document.getElementById("body").style.backgroundImage = "url(assets/FONDO_CRONOGRAMA.jpg)";
  }
  if (sct === "Premios") {
    document.getElementById("body").style.backgroundImage = "url(assets/FONDO_PREMIOS.jpg)";
    document.getElementById('menu_logo').src='assets/LOGO_TRIBOS_anim_black.gif';
    document.getElementById("Side-Menu").style.color = "black";
    document.getElementById('topnav').id ='topnav-b';

  }
  evt.currentTarget.className += " active";
}
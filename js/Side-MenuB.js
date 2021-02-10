window.onload = function() {
	var shiftcero
  shiftcero = document.getElementsByClassName("shift");
  shiftcero[0].className += " active";
};
function shiftcontent(evt, section) {
  var i, wrap, shift;
  var sct = document.getElementById(section).id;
  wrap = document.getElementsByClassName("wrap");
  for (i = 0; i < wrap.length-2; i++) {
    wrap[i].style.display = "none";
  }
  shift = document.getElementsByClassName("shift");
  for (i = 0; i < shift.length; i++) {
    shift[i].className = shift[i].className.replace(" active", "");
    document.getElementById("container-fluid").style.height = "90%";
    document.getElementById("footer").style.position = "fixed";
  }
  document.getElementById(section).style.display = "block";
  if (sct === "Procesos") {
    document.getElementById("container-fluid").style.height = "auto";
    document.getElementById("footer").style.position = "relative";
  }
  evt.currentTarget.className += " active";

}
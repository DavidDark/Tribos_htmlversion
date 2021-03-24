//Go to Firebase
function gotoFB() {
  location.replace(
    "https://console.firebase.google.com/project/tribos-fb/authentication/users"
  );
}
//Shift Content
function shiftcontent(evt, section) {
  var i, j, wrap, dropItem;
  var sct = document.getElementById(section).id;
  wrap = document.getElementsByClassName("hero");
  for (i = 0; i < wrap.length; i++) {
    wrap[i].style.display = "none";
  }

  document.getElementById("homeSection").style.display = "none";
  document.getElementById(section).style.display = "block";
  document.getElementById("body").style.backgroundImage =
    "url(assets/FONDO_PREMIOS.jpg)";
}
//Registrar Usuario
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //clear form
      signupForm.reset();
      //close modal
      $("#signupModal").modal("hide");
    })
    .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          alert("El Email no es válido o ya está en uso.");
          break;
        case "auth/weak-password":
          alert("La contraseña debe contener al menos 6 caractéres.");
          break;
      }
    });
});

//LogOut

const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    location.replace("./index.html");
  });
});

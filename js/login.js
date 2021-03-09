//Ingresar
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //clear form
      loginForm.reset();
      //close modal
      //$('#loginModal').modal('hide')
      location.replace("./admin.html");
    })
    .catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          alert(
            "No se ha encontrado usuario para este correo. Puede que se encuentre deshabilitado o no exista."
          );
          break;
        case "auth/wrong-password":
          alert(
            "Error de contraseña, por favor, ingrese la contraseña correcta."
          );
          document.getElementById("login-password").value = "";
          break;
      }
    });
});

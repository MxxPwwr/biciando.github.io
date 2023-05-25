const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordChk = document.getElementById("passwordChk");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordChkValue = passwordChk.value.trim();

  if (usernameValue === "") {
    username.classList.add("error");
    username.setAttribute("placeholder", "Este campo es obligatorio");
  } else {
    username.classList.remove("error");
  }
  if (emailValue === "") {
    email.classList.add("error");
    email.setAttribute("placeholder", "Este campo es obligatorio");
  } else {
    email.classList.remove("error");
  }
  if (passwordValue === "") {
    password.classList.add("error");
    password.setAttribute("placeholder", "Este campo es obligatorio");
  } else {
    password.classList.remove("error");
  }
  if (passwordValue !== passwordChkValue) {
    password.classList.add("error");
    passwordChk.classList.add("error");
    alert("Las contraseñas no coinciden");
  } else {
    password.classList.remove("error");
    passwordChk.classList.remove("error");
  }

  console.log(emailValue, usernameValue, passwordChkValue, passwordValue);
}

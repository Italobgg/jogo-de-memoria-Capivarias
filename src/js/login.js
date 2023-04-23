const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");

const validarInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", '');

  }
};

input.addEventListener("input", validarInput);

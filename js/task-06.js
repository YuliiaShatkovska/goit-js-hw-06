const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", checkAmountOfSymbols);

function checkAmountOfSymbols(event) {
  if (event.currentTarget.value.length === inputLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}

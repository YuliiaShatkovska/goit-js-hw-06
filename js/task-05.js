const input = document.querySelector("input");
const outputName = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  outputName.textContent = event.currentTarget.value.trim();
}

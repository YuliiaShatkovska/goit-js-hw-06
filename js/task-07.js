const input = document.querySelector("#font-size-control");
console.log(input);
console.log(input.min);
const text = document.querySelector("#text");
console.log(text.textContent);

input.addEventListener("input", changeSize);

function changeSize(event) {
  text.style.fontSize = input.value + "px";
}

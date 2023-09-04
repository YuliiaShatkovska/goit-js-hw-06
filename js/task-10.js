function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxesContainer: document.querySelector("#boxes"),
  controlsContainer: document.querySelector("#controls"),
  inputEl: document.querySelector("input"),
  createButton: document.querySelector("button[data-create]"),
  destroyButton: document.querySelector("button[data-destroy]"),
};

// console.log(refs);

refs.createButton.addEventListener("click", createBoxes);
refs.inputEl.addEventListener("input", checktedAmount);
function checktedAmount(event) {
  console.log(event.currentTarget.value);

  createBoxes(event.currentTarget.value);
}

function createBoxes(amount) {
  console.log(amount);

  // function checktedAmount(event) {}

  const createdEl = document.createElement("div");
  createdEl.style.width = "30px";
  createdEl.style.height = "30px";
  createdEl.style.backgroundColor = getRandomHexColor();
  // console.log(createdEl);

  refs.boxesContainer.append(createdEl);
}

// function createBoxes(amount) {
//   // console.log(amount);

//   // function checktedAmount(event) {}

//   const createdEl = document.createElement("div");
//   createdEl.style.width = "30px";
//   createdEl.style.height = "30px";
//   createdEl.style.backgroundColor = getRandomHexColor();
//   // console.log(createdEl);

//   refs.boxesContainer.append(createdEl);
// }

// refs.destroyButton.addEventListener("click", destroyBoxes);

// function destroyBoxes() {
//   createdEl.remove();
// }
// function createBoxes(amount) {
//   console.log(amount);
//   const createdEl = document.createElement("div");
//   createdEl.style.width = "30px";
//   createdEl.style.height = "30px";
//   createdEl.style.backgroundColor = getRandomHexColor();
//   console.log(createdEl);
//   // refs.boxesContainer.append(createdEl);
// }

// createBoxes(refs.inputEl.textContent);

// refs.destroyButton.addEventListener("click", destroyBoxes);

// function destroyBoxes() {}

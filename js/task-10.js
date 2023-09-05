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

refs.createButton.addEventListener("click", createBoxes);

let boxes = [];
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  refs.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}

refs.createButton.addEventListener("click", () => {
  const amountEl = Number(refs.inputEl.value);
  createBoxes(amountEl);
});

refs.destroyButton.addEventListener("click", destroyBoxes);

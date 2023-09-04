function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
  containerEl: document.querySelector(".widget"),
};

refs.buttonEl.addEventListener("click", handleChangeColor);

function handleChangeColor(events) {
  refs.containerEl.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonEl: document.querySelector(".change-color"),
  spanEl: document.querySelector(".color"),
};

refs.buttonEl.addEventListener("click", handleChangeColor);

function handleChangeColor(events) {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  refs.spanEl.textContent = backgroundColor;
}

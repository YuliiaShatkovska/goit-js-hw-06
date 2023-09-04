const btnDecrement = document.querySelector('[data-action="decrement"]');

const btnIncrement = document.querySelector('[data-action="increment"]');

const counterValue = document.querySelector("#value");

let counter = 0;

btnIncrement.addEventListener("click", () => {
  counter += 1;
  counterValue.textContent = counter;
});

btnDecrement.addEventListener("click", () => {
  counter -= 1;
  counterValue.textContent = counter;
});

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

let createdElements = [];

const createTag = ingredients.forEach(function (ingredient) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  createdElements.push(item);
});

list.append(...createdElements);

// 1.
const listItem = document.querySelector("#categories");
console.log("Number of categories: ", listItem.children.length);

//2.
const item = document.querySelectorAll(".item");

const elItem = item.forEach(function (el) {
  console.log("Category: ", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
});

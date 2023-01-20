import "../styles/style.css";
import { DOM } from "./DOM";
import { items } from "./items";
DOM.themebtn.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
    DOM.themebtn.textContent = "Night Theme";
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
    DOM.themebtn.textContent = "Morning Theme";
  }
});
function createItem(name, price, image) {
  DOM.items.insertAdjacentHTML(
    "afterbegin",
    `<div class="item"> <h3> ${name} </h3> <img id="img" src="${image}" alt="An image of ${name}" /> <p id="price">Price: $${price}</p> <button id="purchaseBtn">Purchase</button></div>`
  );
}
function categoryFilter(category) {
  DOM.items.innerHTML = "";
  const filtered = items.filter((item) =>
    item.categories.includes(`${category}`)
  );
  filtered.forEach((item) => createItem(item.name, item.price, item.image));
}
items.forEach((item) => createItem(item.name, item.price, item.image));

DOM.FreeFilter.addEventListener("click", function () {
  categoryFilter("Free");
});

DOM.TeamFilter.addEventListener("click", function () {
  categoryFilter("Team");
});

DOM.VODFilter.addEventListener("click", function () {
  categoryFilter("VOD");
});

DOM.OnehourFilter.addEventListener("click", function () {
  categoryFilter("Onehour");
});

DOM.OneononeFilter.addEventListener("click", function () {
  categoryFilter("Oneonone");
});

DOM.PaidFilter.addEventListener("click", function () {
  categoryFilter("Paid");
});

DOM.TwohourFilter.addEventListener("click", function () {
  categoryFilter("Twohour");
});
DOM.resetButton.addEventListener("click", function () {
  DOM.items.innerHTML = "";
  items.forEach((item) => createItem(item.name, item.price, item.image));
});

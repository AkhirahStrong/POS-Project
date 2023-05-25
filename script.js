document.querySelector(".menuIcon").addEventListener("click", function (e) {
  e.preventDefault();
  let menuItems = document.querySelector(".mobile-menu");
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
    menuItems.classList.add("show-menu");
  } else {
    menuItems.style.display = "none";
  }
});

let cars = [
  {
    make: "Ford",
    model: "Taurus",
    year: 2013,
    color: "Black",
    price: 12000,
    available: true,
  },
];

document.getElementById("search-container").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(event.target);
  const make = data.get("make");
  const model = data.get("model");
  console.log(make + model);
});

function findCarByName(array, make, model) {}

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
  {
    make: "Ford",
    model: "Flex",
    year: 2013,
    color: "Black",
    price: 12000,
    available: true,
  },
  {
    make: "Ford",
    model: "Flex",
    year: 2011,
    color: "White",
    price: 12000,
    available: true,
  },
  {
    make: "Chevy",
    model: "Sonic",
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
  if (model === "" && make === "") {
    console.error("Require Input");
  } else if (model === "") {
    findCarByMake(make);
  } else {
    findCarByMakeModel(make, model);
  }
  console.log(make + model);
});

function findCarByMake(make) {
  let filteredCars = cars;
  return filteredCars.filter((car) => car.make === make);
}

function findCarByMakeModel(make, model) {
  let filteredCars = cars;

  return filteredCars.filter((car) => car.make === make && car.model === model);
}

// console.log(findCarByMake("Ford"));
console.log(cars);
// console.log(findCarByMakeModel("Ford", "Flex"));

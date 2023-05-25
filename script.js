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
    make: "BMW",
    model: "i7",
    year: 2023,
    color: "Black",
    price: 180000,
    available: true,
  },
  {
    make: "Jeep",
    model: "Cherokee Wagoneer",
    year: 1975,
    color: "Black",
    price: 50000,
    available: true,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 1975,
    color: "Black",
    price: 80000,
    available: true,
  },
  {
    make: "Lancia",
    model: "Statos",
    year: 1978,
    color: "Green",
    price: 120000,
    available: true,
  },
];

for(let car of cars) {
  const carListElement = document.createElement('li');
  carListElement.classList.add('car');
  carListElement.innerHTML = `${car.year} ${car.make} ${car.model}`;
  document.getElementById('car-list').append(carListElement);
}

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

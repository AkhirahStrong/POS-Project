document.querySelector(".menuIcon").addEventListener("click", function (e) {
  e.preventDefault();
  let menuItems = document.querySelector(".mobile-menu");
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
    menuItems.classList.add("show-menu");
  } else {
    menuItems.style.display = "none";
    menuItems.classList.remove("show-menu");
  }
});

document.addEventListener("click", function (e) {
  const menu = document.querySelector(".mobile-menu");
  const menuIcon = document.querySelector(".menuIcon");
  if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
    menu.style.display = "none";
    menu.classList.remove("show-menu");
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
    image: "/imgs/benz.jpg",
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
    price: 400000,
    available: true,
  },
  {
    make: "Jeep",
    model: "Cherokee",
    year: 1999,
    color: "White",
    price: 5000,
    available: true,
  },
  {
    make: "Lamborghini",
    model: "Diablo",
    year: 2001,
    color: "Silver",
    price: 500000,
    available: true,
  },
  {
    make: "Susuki",
    model: "Samurai",
    year: 1995,
    color: "Green",
    price: 18000,
    available: true,
  },
  {
    make: "Kia",
    model: "Sportage",
    year: 2023,
    color: "Blue",
    price: 28000,
    available: true,
  },
  {
    make: "Mini",
    model: "Cooper s",
    year: 2013,
    color: "Red",
    price: 22000,
    available: true,
  },
  {
    make: "Jeep",
    model: "Wrangler",
    year: 2013,
    color: "Red",
    price: 12500,
    available: true,
  },
  {
    make: "Jeep",
    model: "Wrangler",
    year: 1983,
    color: "Red",
    price: 33000,
    available: true,
  },
  {
    make: "Chevy",
    model: "Sonic",
    year: 2013,
    color: "White",
    price: 9000,
    available: true,
  },
  {
    make: "Chevy",
    model: "Impala",
    year: 1972,
    color: "Black",
    price: 40000,
    available: true,
  },
];

function showCars(array = cars) {
  for (let car of array) {
    const carListElement = document.createElement("li");
    carListElement.classList.add("car");
    carListElement.innerHTML = `${car.year} ${car.make} ${car.model} `;
    document.getElementById("car-list").append(carListElement);

    const imageElement = document.createElement("img");
    imageElement.src = car.image;
    imageElement.classList.add("car-image");
    carListElement.appendChild(imageElement);

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("car-details");
    detailsElement.innerHTML = `
            
            <p>Color: ${car.color}</p>
            <p>Price: ${car.price}</p>
            <p>Available: ${car.available ? "Yes" : "No"}</p>
        `;
    carListElement.appendChild(detailsElement);

    document.getElementById("car-list").appendChild(carListElement);

    const addToCart = document.createElement("button");
    addToCart.textContent = "Cart";
  }
}

function hideCars() {
  const ul = document.getElementById("car-list");
  while (ul.firstChild) ul.removeChild(ul.firstChild);
}

showCars();

document.getElementById("search-container").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(event.target);
  const make = data.get("make");
  const model = data.get("model");
  if (model === "" && make === "") {
    hideCars();
    showCars();
    console.error("Input Required");
  } else if (model === "") {
    findCarByMake(make);
  } else if (make === "") {
    findCarByMakeModel(model);
  } else {
    findCarByMakeModel(make, model);
  }
  console.log(make + model);
  document.getElementById("make-input").value = "";
  document.getElementById("model-input").value = "";
});

function findCarByMake(make) {
  hideCars();
  let filteredCars = cars;
  showCars(
    filteredCars.filter((car) => car.make.toLowerCase() === make.toLowerCase())
  );
}

function findCarByMakeModel(model) {
  hideCars();
  let filteredCars = cars;
  showCars(
    filteredCars.filter(
      (car) =>
        // car.make.toLowerCase() === make.toLowerCase() &&
        car.model.toLowerCase() === model.toLowerCase()
    )
  );
}

let makeinput = document.querySelector("#make-input");

let modelinput = document.querySelector("#model-input");

let search = document.querySelector("#search-container > button");

search.addEventListener("click", function () {
  console.log(makeinput.innerHTML);

  const filteredCars = cars.filter((car) =>
    car.model.toLowerCase().includes(makeinput.innerHTML)
  );
  console.log(filteredCars);
});

const cartItems = [];

// Displays menu
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

//Remove menu on click
document.addEventListener("click", function (e) {
  const menu = document.querySelector(".mobile-menu");
  const menuIcon = document.querySelector(".menuIcon");
  if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
    menu.style.display = "none";
    menu.classList.remove("show-menu");
  }
});

//Array for car objects
let cars = [
  {
    make: "BMW",
    model: "i7",
    year: 2023,
    color: "Black",
    price: 180000,
    available: true,
    image: "/imgs/bmw - i7.webp",
  },
  {
    make: "Jeep",
    model: "Cherokee Wagoneer",
    year: 1975,
    color: "Black",
    price: 50000,
    available: true,
    image: "/imgs/Jeep- Cheerokee -Wagoneer -Black.jpg",
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 1975,
    color: "Black",
    price: 80000,
    available: true,
    image: "/imgs/6292f5ccbdae8.jpg",
  },
  {
    make: "Lancia",
    model: "Statos",
    year: 1978,
    color: "Green",
    price: 400000,
    available: true,
    image: "/imgs/Lancia-Stratos-Green.jpg",
  },
  {
    make: "Jeep",
    model: "Cherokee",
    year: 1999,
    color: "White",
    price: 5000,
    available: true,
    image: "/imgs/1999-jeep-cherokee.jpg",
  },
  {
    make: "Lamborghini",
    model: "Diablo",
    year: 2001,
    color: "Silver",
    price: 500000,
    available: true,
    image: "/imgs/Lambo Diablo white.webp",
  },
  {
    make: "Susuki",
    model: "Samurai",
    year: 1995,
    color: "Green",
    price: 18000,
    available: true,
    image: "/imgs/Suzuki Samurai Green.jpeg",
  },
  {
    make: "Kia",
    model: "Sportage",
    year: 2023,
    color: "Blue",
    price: 28000,
    available: true,
    image: "/imgs/Kia Sportage blue .webp",
  },
  {
    make: "Mini",
    model: "Cooper s",
    year: 2013,
    color: "Red",
    price: 22000,
    available: true,
    image: "/imgs/Mini Cooper S Red.jpg",
  },
  {
    make: "Jeep",
    model: "Wrangler",
    year: 2013,
    color: "Red",
    price: 12500,
    available: true,
    image: "/imgs/Jeep Wrangler Red 2013.webp",
  },
  {
    make: "Jeep",
    model: "Wrangler",
    year: 1983,
    color: "Red",
    price: 33000,
    available: true,
    image: "/imgs/Jeep Wrangler Red 1983.webp",
  },
  {
    make: "Chevy",
    model: "Sonic",
    year: 2013,
    color: "White",
    price: 9000,
    available: true,
    image: "/imgs/Chevy Sonic White 2013.jpg",
  },
  {
    make: "Chevy",
    model: "Impala",
    year: 1972,
    color: "Black",
    price: 40000,
    available: true,
    image: "/imgs/Chevy Impala 1972 Black.jpg",
  },
];

function showCars(array = cars) {
  for (let car of array) {
    //Display year make and model
    const carListElement = document.createElement("li");
    carListElement.classList.add("car");
    carListElement.innerHTML = `${car.year} ${car.make} ${car.model} `;
    document.getElementById("car-list").append(carListElement);

    //Display images
    const imageElement = document.createElement("img");
    imageElement.src = car.image;
    imageElement.classList.add("car-image");
    carListElement.appendChild(imageElement);

    //Display color, price, and availability
    const detailsElement = document.createElement("div");
    detailsElement.classList.add("car-details");
    detailsElement.innerHTML = `
            
            <p>Color: ${car.color}</p>
            <p>Price: $${car.price.toLocaleString()}</p>
            <p>Available: ${car.available ? "Yes" : "No"}</p>
        `;
    carListElement.appendChild(detailsElement);

    //Add the "Add-to-Cart button"
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add("add-to-cart-button");
    carListElement.appendChild(addToCartButton);

    //Append item to cart
    addToCartButton.addEventListener("click", () => {
      addToCart(car);
    });
    carListElement.appendChild(addToCartButton);

    document.getElementById("car-list").appendChild(carListElement);
  }
}

function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = ""; // Clear previous contents of the cart container

  for (let item of cartItems) {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("add-to-cart-button");

    cartItemElement.textContent = `$${item.price.toLocaleString()} 
    ${item.year} ${item.make} ${item.model} ${item.color}`;

    cartContainer.appendChild(cartItemElement);
  }
  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");

  cartCount.textContent = cartItems.length;
}

function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

//Hide car after query
function hideCars() {
  const ul = document.getElementById("car-list");
  while (ul.firstChild) ul.removeChild(ul.firstChild);
}

showCars();

//Input function
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

//Filter car by make
function findCarByMake(make) {
  hideCars();
  let filteredCars = cars;
  showCars(
    filteredCars.filter((car) => car.make.toLowerCase() === make.toLowerCase())
  );
}

//filter car by model
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

//Form function
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

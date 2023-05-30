function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  // Clear previous contents of the cart container
  cartContainer.innerHTML = "";

  let totalPrice = 0; // Variable to store the total price

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("add-to-cart-button");

    const imageElement = document.createElement("img");
    imageElement.classList.add("style-result");
    imageElement.src = item.image;
    imageElement.alt = `${item.make} ${item.model}`;

    const detailsElement = document.createElement("div");
    imageElement.classList.add("style-result");
    detailsElement.textContent = `$${item.price.toLocaleString()} 
        ${item.year} ${item.make} ${item.model} ${item.color}`;

    // Get the current item index
    (function (index) {
      // Attach a click event listener to remove the item
      cartItemElement.addEventListener("click", function () {
        // Remove the item from the cartItems array
        cartItems.splice(index, 1);
        updateCart(); // Update the cart display
      });
    })(i);

    //Add items to cart section
    cartItemElement.appendChild(imageElement);
    cartItemElement.appendChild(detailsElement);
    cartContainer.appendChild(cartItemElement);

    totalPrice += item.price; // Add item price to the total price
  }

  const tax = 0.1; // Tax rate (10%)

  // Calculate total price with tax
  const totalPriceWithTax = totalPrice * (1 + tax);
  const formattedPriceWithTax = totalPriceWithTax.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });

  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");

  cartCount.textContent = cartItems.length;
  // Update the cart icon with the formatted total price with tax
  cartIcon.setAttribute(
    "title",
    `Total Price with Tax: ${formattedPriceWithTax}`
  );
}

function addToCart(item) {
  cartItems.push(item);
  updateCart();
}

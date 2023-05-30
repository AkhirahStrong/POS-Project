function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = ""; // Clear previous contents of the cart container

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("add-to-cart-button");

    const imageElement = document.createElement("img");
    imageElement.classList.add("style-result");
    imageElement.src = item.image;
    imageElement.alt = `${item.make} ${item.model}`;

    const detailsElement = document.createElement("div");
    detailsElement.textContent = `$${item.price.toLocaleString()} 
        ${item.year} ${item.make} ${item.model} ${item.color}`;

    // Create a closure to capture the current item index
    (function (index) {
      // Attach a click event listener to remove the item
      cartItemElement.addEventListener("click", function () {
        // Remove the item from the cartItems array
        cartItems.splice(index, 1);
        updateCart(); // Update the cart display
      });
    })(i);

    cartItemElement.appendChild(imageElement);
    cartItemElement.appendChild(detailsElement);

    cartContainer.appendChild(cartItemElement);
  }

  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");

  cartCount.textContent = cartItems.length;
}

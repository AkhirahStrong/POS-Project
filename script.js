document.querySelector(".menuIcon").addEventListener("click", function (e) {
  e.preventDefault();
  let menuItems = document.querySelector(".mobile-menu");
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
    menuItems.classList.add("show-menu");
  } else {
    menuItems.style.display = "none";
    menuItems.classList.remove("show-menu"); // Remove class for animation
    setTimeout(function () {
      menuItems.style.display = "none";
    }, 300);
  }
});

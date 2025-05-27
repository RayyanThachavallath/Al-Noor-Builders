window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("navbar-scrolled");
  } else {
    header.classList.remove("navbar-scrolled");
  }
});

$(".counter").counterUp({
  delay: 15,
  time: 1000,
});

document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.getElementById("hamburger-icon");
  const hamMenu = document.getElementById("hamburger-menu-container");
  const hamCloseBtn = document.getElementById("ham-close-btn");

  hamButton.addEventListener("click", () => {
    hamMenu.classList.add("show");
  });

  hamCloseBtn.addEventListener("click", () => {
    hamMenu.classList.remove("show");
  });
});


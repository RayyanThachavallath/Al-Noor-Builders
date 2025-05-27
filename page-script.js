window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("navbar-scrolled");
  } else {
    header.classList.remove("navbar-scrolled");
  }
});

const hamButton = document.getElementById("hamburger-icon");
const hamMenu = document.getElementById("hamburger-menu-container");
const hamCloseBtn = document.getElementById("ham-close-btn");

hamButton.addEventListener("click", () => {
  hamMenu.classList.add("show");
});

hamCloseBtn.addEventListener("click", () => {
  hamMenu.classList.remove("show");
});

const contactBtn = document.getElementById('contact-btn');

contactBtn.addEventListener('click' ,() =>{
    alert('Message Submitted')
})
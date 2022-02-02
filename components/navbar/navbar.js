const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
const navBarUL = document.querySelector(".navbar-ul");

hamburgerBtn.addEventListener("click", () => {
  navBarUL.classList.toggle("show");
});

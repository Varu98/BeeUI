const navMenu = document.querySelector("nav-menu");
const hamburgerBtn = document.querySelector(".menu-btn");

hamburgerBtn.addEventListener("click", () => {
  const visibility = navMenu.getAttribute("data-visible");

  if (visibility === "false") {
    navMenu.setAttribute("data-visible", true);
    hamburgerBtn.style.color = "hsl(var(--purple))";
  } else {
    navMenu.setAttribute("data-visible", false);
    hamburgerBtn.style.color = "hsl(var(--purple))";
  }
});

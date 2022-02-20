const navCompMenu = document.querySelector("nav-components");
const swapBtn = document.querySelector(".swap-btn");

swapBtn.addEventListener("click", () => {
  const visibility = navCompMenu.getAttribute("data-visible");

  if (visibility === "false") {
    navCompMenu.setAttribute("data-visible", true);
    swapBtn.style.color = "hsl(var(--purple))";
  } else {
    navCompMenu.setAttribute("data-visible", false);
    swapBtn.style.color = "hsl(var(--purple))";
  }
});

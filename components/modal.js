const modal__wrapper = document.querySelector("#modal__wrapper");
const modal__btn_close = document.querySelector("#modal__btn_close");
const modal__btn_open = document.querySelector("#modal__btn_open");

console.log(modal__btn_close);
console.log(modal__btn_open);

modal__btn_close.addEventListener("click", () => {
  console.log("hello");
  modal__wrapper.classList.remove("show");
});

modal__btn_open.addEventListener("click", () => {
  console.log("hello");
  modal__wrapper.classList.add("show");
});

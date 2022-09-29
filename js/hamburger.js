const menu = document.querySelector(".menu");
console.log(menu);
const close = document.querySelector(".close");
console.log(close);
const nav = document.querySelector("nav");
console.log(nav);

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

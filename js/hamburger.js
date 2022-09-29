// const menu = document.querySelector(".menu");

// const nav = document.querySelector("#main-nav");

// menu.addEventListener("click", () => {
//   if (nav.classList.contains("open-nav")) {
//     nav.classList.remove("open-nav");
//   } else {
//     nav.classList.add("open-nav");
//   }
// });

// trying again

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("#main-nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});

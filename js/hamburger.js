const menu = document.querySelector(".menu");

const nav = document.querySelector(".stroke");

menu.addEventListener("click", () => {
  if (nav.classList.contains("open-nav")) {
    nav.classList.remove("open-nav");
  } else {
    nav.classList.add("open-nav");
  }
});

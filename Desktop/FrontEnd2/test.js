// console.log(window.location.href);

const h1 = document.querySelector(".homepage");

const profile = "profile";

h1.addEventListener("click", () => {
  window.location.href = `http://127.0.0.1:5500/${profile}.html`;
});
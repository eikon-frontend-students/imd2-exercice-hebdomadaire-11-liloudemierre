var button = document.querySelector(".button");
var icon = document.querySelector(".icon");
var text = document.querySelector(".text");
var count = document.querySelector(".count");

function changeColor() {
  button.classList.add("is-active");
  icon.classList.add("is-active");
  text.classList.add("is-active");
  count.classList.add("is-active");
  setTimeout(function () {
    button.classList.remove("is-active");
    icon.classList.remove("is-active");
    text.classList.remove("is-active");
    count.classList.remove("is-active");
  }, 2000);
}
button.addEventListener("click", changeColor);

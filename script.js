const btn = document.querySelector(".button");
const stopElement = document.getElementById("stop");
const walkElement = document.getElementById("walk");

btn.addEventListener("click", (event) => {
  stopElement.src = "img/stop-off.svg";
  walkElement.src = "img/walk-on.svg";
});

setTimeout((event) => {
  stopElement.src = "img/stop-on.svg";
  walkElement.src = "img/walk-off.svg";
}, 5000);

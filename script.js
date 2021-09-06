let cow = document.querySelector("#animal");
let moveBy = 10;
window.addEventListener("load", () => {
  cow.style.position = "absolute";
  cow.style.left = 0;
  cow.style.top = 0;
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      cow.style.left = parseInt(cow.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      cow.style.left = parseInt(cow.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      cow.style.top = parseInt(cow.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      cow.style.top = parseInt(cow.style.top) + moveBy + "px";
      break;
  }
});

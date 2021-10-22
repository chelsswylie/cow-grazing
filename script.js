let cow = document.querySelector("#animal");
let moveBy = 10;
const directionArr = [];
window.addEventListener("load", () => {
  cow.style.position = "absolute";
  cow.style.left = 0;
  cow.style.top = 0;
  cow.src = "/cowUp.png";
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      cow.style.left = parseInt(cow.style.left) - moveBy + "px";
      cow.src = "/cowLeft.png";
      return (
        console.log("you've gone left by 10px, click again!"),
        directionArr.push("ArrowLeft"),
        console.log(directionArr)
      );
    case "ArrowRight":
      cow.style.left = parseInt(cow.style.left) + moveBy + "px";
      cow.src = "/cowRight.png";
      return (
        console.log("you've gone right by 10px, click again!"),
        directionArr.push("ArrowRight"),
        console.log(directionArr)
      );
    case "ArrowUp":
      cow.style.top = parseInt(cow.style.top) - moveBy + "px";
      cow.src = "/cowUp.png";
      return (
        console.log("you've gone up by 10px, click again!"),
        directionArr.push("ArrowUp"),
        console.log(directionArr)
      );
    case "ArrowDown":
      cow.style.top = parseInt(cow.style.top) + moveBy + "px";
      cow.src = "/cowBottom.png";
      return (
        console.log("you've gone down by 10px, click again!"),
        directionArr.push("ArrowDown"),
        console.log(directionArr)
      );
  }
  console.log(directionArr);
});

// if else if or switch statement to rotate between images of cow to change between key press

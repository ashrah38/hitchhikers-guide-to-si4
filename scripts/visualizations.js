let speed = 1000; // the default speed
inputSpeed.addEventListener("input", speedOfAnimation);

function speedOfAnimation() {
  let arraySpeed = inputSpeed.value;
  arraySpeed = parseInt(arraySpeed);
  switch (arraySpeed) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delayTime = 10000 / (Math.floor(arraySize / 10) * speed); //Decrease numerator to increase speed.
}

let delayTime = 10000 / (Math.floor(arraySize / 10) * speed);
let delayAnimation = 0;

// Handles the height and color changes
function updateColorAndHeight(targetBar, height, color) {
  window.setTimeout(function () {
    targetBar.style = `background-color:${color}; height: ${3 + height / 4}vh`;
    targetBar.innerHTML = height;
  }, (delayAnimation += delayTime));
}

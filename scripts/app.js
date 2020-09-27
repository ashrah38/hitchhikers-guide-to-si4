const inputSpeed = document.getElementById("speed"); //speed of animation
const inputElements = document.getElementById("array_elements"); //get the custom array elements
const arrayContainer = document.getElementById("array_container"); //container of array
const arrayDisplay = document.getElementById("array-display"); // displaying array underneath graph
const inputSize = document.getElementById("array-size");
let arraySize = inputSize.value;
let barHeights = []; //stores the size of each bar
let barsHTML = []; //stores each bar

// Generate random array of x elements
let randomArray = () => {
  let randArray = [];
  for (let i = 0; i < arraySize; i++) {
    randArray.push(Math.ceil(Math.random() * 200));
  }
  return randArray;
};

// FUNCTION TO DISPLAY CUSTOM ARRAY
let generateCustomArray = () => {
  arrayContainer.innerHTML = "";
  let defaultValue = "21, 12, 13, 42, 55, 8, 91, 79, 80";
  let data = inputElements.value;
  console.log(data);
  if (data == "") {
    data = defaultValue;
  }
  data = data.split(" ").join("");
  data = data.split(",");
  barHeights = data.map((entry) => (entry = parseInt(entry, 10)));
  arraySize = barHeights.length;
  for (let i = 0; i < arraySize; i++) {
    barsHTML[i] = document.createElement("div");
    barsHTML[i].classList.add("bar");
    barsHTML[i].innerHTML = barHeights[i];
    arrayContainer.appendChild(barsHTML[i]);
    barsHTML[i].style = `background-color: #018b7f; height: ${
      5 + barHeights[i] / 4
    }vh`;
  }
};

// FUNCTION TO DISPLAY RANDOM ARRAY
function generateRandomArray() {
  if (inputSize.value != "") {
    arraySize = inputSize.value;
    console.log(inputSize.value);
  }
  arrayContainer.innerHTML = "";
  barHeights = randomArray();
  for (let i = 0; i < arraySize; i++) {
    barsHTML[i] = document.createElement("div");
    barsHTML[i].classList.add("bar");
    barsHTML[i].innerHTML = barHeights[i];
    arrayContainer.appendChild(barsHTML[i]);
    barsHTML[i].style = `background-color: #018b7f; height: ${
      5 + barHeights[i] / 4
    }vh`;
  }
}

// FUNCTION TO GENERATE DEFAULT ARRAY ON LOAD
function onRefresh() {
  arraySize = 50;
  generateRandomArray();
}

//Array generation
window.onload = onRefresh();
randomArrayBtn.addEventListener("click", generateRandomArray);
customArrayBtn.addEventListener("click", generateCustomArray);

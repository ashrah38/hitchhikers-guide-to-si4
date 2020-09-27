const nextBtn = document.getElementById("next");
const sortBtn = document.getElementById("sort");

let bubbleSortNextIteration = (array) => {
  let len = array.length;
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        displayGraph(array);
      }
    }
  }
  elementsArray = array;
  return array;
};

let bubbleSort = (array) => {
  let len = array.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        displayGraph(array);
      }
    }
  }

  return array;
};

nextBtn.addEventListener("click", () => {
  bubbleSortNextIteration(elementsArray);
});
sortBtn.addEventListener("click", () => {
  bubbleSort(elementsArray);
});

function selectionSort() {
  delayAnimation = 0;

  for (let i = 0; i < arraySize; i++) {
    updateColorAndHeight(barsHTML[i], barHeights[i], "red");

    // the index of the current minimum number
    index_min = i;

    for (let j = i + 1; j < arraySize; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");

      if (barHeights[j] < barHeights[index_min]) {
        if (index_min != i) {
          updateColorAndHeight(
            barsHTML[index_min],
            barHeights[index_min],
            "blue"
          );
        }
        // then set this bar as the minimum number
        index_min = j;
        updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "red");
      } else {
        updateColorAndHeight(barsHTML[j], barHeights[j], "blue");
      }
    }
    // swap stuff
    if (index_min != i) {
      let temp = barHeights[index_min];
      barHeights[index_min] = barHeights[i];
      barHeights[i] = temp;

      updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "red");
      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "blue");
    }
    updateColorAndHeight(barsHTML[i], barHeights[i], "green");
  }
  updateColorAndHeight(barsHTML[i], barHeights[i], "green");
}

// NEXT SWAP FOR SELECTION SORT
function swapNextSelection() {
  let swapFlag = false;
  delayAnimation = 0;

  for (let i = 0; i < arraySize - 1; i++) {
    updateColorAndHeight(barsHTML[i], barHeights[i], "red");

    // the index of the current minimum number
    index_min = i;

    for (let j = i + 1; j < arraySize; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");
      if (barHeights[j] < barHeights[index_min]) {
        if (index_min != i) {
          updateColorAndHeight(
            barsHTML[index_min],
            barHeights[index_min],
            "blue"
          );
        }
        // then set this bar as the minimum number
        index_min = j;
        updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "red");
        swapFlag = true;
      } else {
        updateColorAndHeight(barsHTML[j], barHeights[j], "blue");
      }
    }
    // swap stuff
    if (index_min != i) {
      let temp = barHeights[index_min];
      barHeights[index_min] = barHeights[i];
      barHeights[i] = temp;

      updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "red");
      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "blue");
    }
    updateColorAndHeight(barsHTML[i], barHeights[i], "green");
    if (swapFlag) {
      break;
    }
  }
  updateColorAndHeight(barsHTML[i], barHeights[i], "green");
}

let counter = 0;
// NEXT ITERATION FOR SELECTION SORT
function iterationNextSelection() {
  let iterationFlag = false;
  delayAnimation = 0;

  for (let i = counter; i < arraySize - 1; i++) {
    updateColorAndHeight(barsHTML[i], barHeights[i], "red");
    // the index of the current minimum number
    index_min = i;

    for (let j = i + 1; j < arraySize; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");

      if (barHeights[j] < barHeights[index_min]) {
        if (index_min != i) {
          updateColorAndHeight(
            barsHTML[index_min],
            barHeights[index_min],
            "blue"
          );
        }
        // then set this bar as the minimum number
        index_min = j;
        updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "red");
        iterationFlag = true;
      } else {
        updateColorAndHeight(barsHTML[j], barHeights[j], "blue");
      }
    }
    // swap stuff
    if (index_min != i) {
      let temp = barHeights[index_min];
      barHeights[index_min] = barHeights[i];
      barHeights[i] = temp;

      updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "red");
      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[index_min], barHeights[index_min], "blue");
    }
    updateColorAndHeight(barsHTML[i], barHeights[i], "green");
    if (iterationFlag) {
      counter++;
      break;
    }
    if (counter == arraySize - 1) {
      counter = 0;
    }
  }
  updateColorAndHeight(barsHTML[i], barHeights[i], "green");
}

// Add functionality to all the buttons
selectionSortBtn.addEventListener("click", selectionSort);
selectionSortSwapBtn.addEventListener("click", swapNextSelection);
selectionSortIterateBtn.addEventListener("click", iterationNextSelection);

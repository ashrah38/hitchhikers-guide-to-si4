function bubbleSort() {
  delayAnimation = 0;

  // BUBBLE SORT ALGORITHM
  for (let i = 0; i < arraySize - 1; i++) {
    for (j = 0; j < arraySize - i - 1; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");

      if (barHeights[j] > barHeights[j + 1]) {
        updateColorAndHeight(barsHTML[j], barHeights[j], "red");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "red");

        //swapping the values
        let temp = barHeights[j];
        barHeights[j] = barHeights[j + 1];
        barHeights[j + 1] = temp;

        updateColorAndHeight(barsHTML[j], barHeights[j], "red");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "red");
      }
      updateColorAndHeight(barsHTML[j], barHeights[j], "blue");
    }
    updateColorAndHeight(barsHTML[j], barHeights[j], "green");
  }
  updateColorAndHeight(barsHTML[0], barHeights[0], "green");
}

// NEXT SWAP FOR BUBBLE SORT
function swapNextBubble() {
  delayAnimation = 0;
  let swapFlag = false;
  // algorithm for bubble sort
  for (let i = 0; i < arraySize - 1; i++) {
    for (j = 0; j < arraySize - i - 1; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");

      if (barHeights[j] > barHeights[j + 1]) {
        updateColorAndHeight(barsHTML[j], barHeights[j], "red");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "red");

        //swapping the values
        let temp = barHeights[j];
        barHeights[j] = barHeights[j + 1];
        barHeights[j + 1] = temp;

        updateColorAndHeight(barsHTML[j], barHeights[j], "red");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "red");
        swapFlag = true;
        break;
      }
      if (swapFlag) {
        break;
      }
      updateColorAndHeight(barsHTML[j], barHeights[j], "blue"); //Color update
    }
    if (swapFlag) {
      break;
    }
    updateColorAndHeight(barsHTML[j], barHeights[j], "green"); //Color update
  }
  updateColorAndHeight(barsHTML[0], barHeights[0], "green"); //Color update
}

// NEXT ITERATION FOR BUBBLE SORT
function iterationNextBubble() {
  delayAnimation = 0;
  let iterationFlag = false;
  // algorithm for bubble sort
  for (let i = 0; i < arraySize - 1; i++) {
    for (j = 0; j < arraySize - i - 1; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");

      if (barHeights[j] > barHeights[j + 1]) {
        updateColorAndHeight(barsHTML[j], barHeights[j], "red");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "red");

        //swapping the values
        let temp = barHeights[j];
        barHeights[j] = barHeights[j + 1];
        barHeights[j + 1] = temp;

        updateColorAndHeight(barsHTML[j], barHeights[j], "red");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "red");
      }
      updateColorAndHeight(barsHTML[j], barHeights[j], "blue");
    }
    updateColorAndHeight(barsHTML[j], barHeights[j], "green");
    iterationFlag = true;
    if (iterationFlag) {
      break;
    }
  }
  updateColorAndHeight(barsHTML[0], barHeights[0], "green");
}

// button functionality
bubbleSortBtn.addEventListener("click", bubbleSort);
bubbleSortSwapBtn.addEventListener("click", swapNextBubble);
bubbleSortIterateBtn.addEventListener("click", iterationNextBubble);

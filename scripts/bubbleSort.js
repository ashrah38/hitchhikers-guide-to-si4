function bubbleSort() {
  delayAnimation = 0;

  // BUBBLE SORT ALGORITHM
  for (let i = 0; i < arraySize - 1; i++) {
    for (j = 0; j < arraySize - i - 1; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "#cbc412");

      if (barHeights[j] > barHeights[j + 1]) {
        updateColorAndHeight(barsHTML[j], barHeights[j], "#8F4FA0");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "#8F4FA0");

        //swapping the values
        let temp = barHeights[j];
        barHeights[j] = barHeights[j + 1];
        barHeights[j + 1] = temp;

        updateColorAndHeight(barsHTML[j], barHeights[j], "#8F4FA0");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "#8F4FA0");
      }
      updateColorAndHeight(barsHTML[j], barHeights[j], " #018b7f");
    }
    updateColorAndHeight(barsHTML[j], barHeights[j], "#002E17");
  }
  updateColorAndHeight(barsHTML[0], barHeights[0], "#002E17");
}

// NEXT SWAP FOR BUBBLE SORT
function swapNextBubble() {
  delayAnimation = 0;
  let swapFlag = false;
  // algorithm for bubble sort
  for (let i = 0; i < arraySize - 1; i++) {
    for (j = 0; j < arraySize - i - 1; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "#cbc412");

      if (barHeights[j] > barHeights[j + 1]) {
        updateColorAndHeight(barsHTML[j], barHeights[j], "#8F4FA0");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "#8F4FA0");

        //swapping the values
        let temp = barHeights[j];
        barHeights[j] = barHeights[j + 1];
        barHeights[j + 1] = temp;

        updateColorAndHeight(barsHTML[j], barHeights[j], "#8F4FA0");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "#8F4FA0");
        swapFlag = true;
        break;
      }
      if (swapFlag) {
        break;
      }
      updateColorAndHeight(barsHTML[j], barHeights[j], " #018b7f"); //Color update
    }
    if (swapFlag) {
      break;
    }
    updateColorAndHeight(barsHTML[j], barHeights[j], "#002E17"); //Color update
  }
  updateColorAndHeight(barsHTML[0], barHeights[0], "#002E17"); //Color update
}

// NEXT ITERATION FOR BUBBLE SORT
function iterationNextBubble() {
  delayAnimation = 0;
  let iterationFlag = false;
  // algorithm for bubble sort
  for (let i = 0; i < arraySize - 1; i++) {
    for (j = 0; j < arraySize - i - 1; j++) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "#cbc412");

      if (barHeights[j] > barHeights[j + 1]) {
        updateColorAndHeight(barsHTML[j], barHeights[j], "#8F4FA0");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "#8F4FA0");

        //swapping the values
        let temp = barHeights[j];
        barHeights[j] = barHeights[j + 1];
        barHeights[j + 1] = temp;

        updateColorAndHeight(barsHTML[j], barHeights[j], "#8F4FA0");
        updateColorAndHeight(barsHTML[j + 1], barHeights[j + 1], "#8F4FA0");
      }
      updateColorAndHeight(barsHTML[j], barHeights[j], " #018b7f");
    }
    updateColorAndHeight(barsHTML[j], barHeights[j], "#002E17");
    iterationFlag = true;
    if (iterationFlag) {
      break;
    }
  }
  updateColorAndHeight(barsHTML[0], barHeights[0], "#002E17");
}

// button functionality
bubbleSortBtn.addEventListener("click", bubbleSort);
bubbleSortSwapBtn.addEventListener("click", swapNextBubble);
bubbleSortIterateBtn.addEventListener("click", iterationNextBubble);

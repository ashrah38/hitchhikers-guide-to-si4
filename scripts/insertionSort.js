function insertionSort() {
  c_delay = 0;

  for (j = 0; j < arraySize; j++) {
    updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");

    let key = barHeights[j]; // key is the current element's value in the array
    let i = j - 1; // index to the left of the key
    while (i >= 0 && barHeights[i] > key) {
      // comparing until left side is greater or index 0 reached
      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "red");

      // swap
      barHeights[i + 1] = barHeights[i];
      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "red");

      updateColorAndHeight(barsHTML[i], barHeights[i], "blue");
      if (i == j - 1) {
        updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "yellow");
      } else {
        updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "blue");
      }
      i -= 1; // keep moving to the left
    } // end of while loop
    barHeights[i + 1] = key; // currently the highest

    for (let t = 0; t < j; t++) {
      updateColorAndHeight(barsHTML[t], barHeights[t], "green");
    }
  }
  updateColorAndHeight(barsHTML[j - 1], barHeights[j - 1], "green");
}

// NEXT INSERTION FOR INSERTION SORT
function insertNextInsertion() {
  delayAnimation = 0;
  let insertionFlag = false;
  for (let j = 0; j < arraySize; j++) {
    updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");

    let key = barHeights[j]; // key is the current element's value in the array
    let i = j - 1; // index to the left of the key
    while (i >= 0 && barHeights[i] > key) {
      // comparing until left side is greater or index 0 reached
      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "red");
      // swap
      barHeights[i + 1] = barHeights[i];
      insertionFlag = true;
      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "red");

      updateColorAndHeight(barsHTML[i], barHeights[i], "blue");
      if (i == j - 1) {
        updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "yellow");
      } else {
        updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "blue");
      }
      i -= 1; // keep moving to the left
    } // end of while loop
    barHeights[i + 1] = key; // currently the highest

    for (let t = 0; t < j; t++) {
      updateColorAndHeight(barsHTML[t], barHeights[t], "green");
    }
    if (insertionFlag) {
      break;
    }
  }
  updateColorAndHeight(barsHTML[j - 1], barHeights[j - 1], "green");
}

// adding button functionality
insertionSortBtn.addEventListener("click", insertionSort);
insertionSortSwapBtn.addEventListener("click", insertNextInsertion);

function insertionSort() {
  c_delay = 0;

  for (j = 0; j < arraySize; j++) {
    updateColorAndHeight(barsHTML[j], barHeights[j], "#cbc412");

    let key = barHeights[j]; // key is the current element's value in the array
    let i = j - 1; // index to the left of the key
    while (i >= 0 && barHeights[i] > key) {
      // comparing until left side is greater or index 0 reached
      updateColorAndHeight(barsHTML[i], barHeights[i], "#8f4fa0");
      updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "#8f4fa0");

      // swap
      barHeights[i + 1] = barHeights[i];
      updateColorAndHeight(barsHTML[i], barHeights[i], "#8f4fa0");
      updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "#8f4fa0");

      updateColorAndHeight(barsHTML[i], barHeights[i], "#018b7f");
      if (i == j - 1) {
        updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "#cbc412");
      } else {
        updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "#018b7f");
      }
      i -= 1; // keep moving to the left
    } // end of while loop
    barHeights[i + 1] = key; // currently the highest

    for (let t = 0; t < j; t++) {
      updateColorAndHeight(barsHTML[t], barHeights[t], "#002e17");
    }
  }
  updateColorAndHeight(barsHTML[j - 1], barHeights[j - 1], "#002e17");
}

// NEXT INSERTION FOR INSERTION SORT
function insertNextInsertion() {
  delayAnimation = 0;
  let insertionFlag = false;
  for (let j = 0; j < arraySize; j++) {
    updateColorAndHeight(barsHTML[j], barHeights[j], "#cbc412");

    let key = barHeights[j]; // key is the current element's value in the array
    let i = j - 1; // index to the left of the key
    while (i >= 0 && barHeights[i] > key) {
      // comparing until left side is greater or index 0 reached
      updateColorAndHeight(barsHTML[i], barHeights[i], "#8f4fa0");
      updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "#8f4fa0");
      // swap
      barHeights[i + 1] = barHeights[i];
      insertionFlag = true;
      updateColorAndHeight(barsHTML[i], barHeights[i], "#8f4fa0");
      updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "#8f4fa0");

      updateColorAndHeight(barsHTML[i], barHeights[i], "#018b7f");
      if (i == j - 1) {
        updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "#cbc412");
      } else {
        updateColorAndHeight(barsHTML[i + 1], barHeights[i + 1], "#018b7f");
      }
      i -= 1; // keep moving to the left
    } // end of while loop
    barHeights[i + 1] = key; // currently the highest

    for (let t = 0; t < j; t++) {
      updateColorAndHeight(barsHTML[t], barHeights[t], "#002e17");
    }
    if (insertionFlag) {
      break;
    }
  }
  updateColorAndHeight(barsHTML[j - 1], barHeights[j - 1], "#002e17");
}

// adding button functionality
insertionSortBtn.addEventListener("click", insertionSort);
insertionSortSwapBtn.addEventListener("click", insertNextInsertion);

// basic function
function quickSort() {
  delayAnimation = 0;
  quick_Sort(0, arraySize - 1);
}

function divideArray(start, end) {
  let i = start + 1;
  let pivot = barHeights[start]; //make the first element as pivot element.
  updateColorAndHeight(barsHTML[start], barHeights[start], "#cbc412");

  for (j = start + 1; j <= end; j++) {
    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    if (barHeights[j] < pivot) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "#cbc412");

      updateColorAndHeight(barsHTML[i], barHeights[i], "#8f4fa0");
      updateColorAndHeight(barsHTML[j], barHeights[j], "#8f4fa0");

      let temp = barHeights[i];
      barHeights[i] = barHeights[j];
      barHeights[j] = temp;

      updateColorAndHeight(barsHTML[i], barHeights[i], "#8f4fa0");
      updateColorAndHeight(barsHTML[j], barHeights[j], "#8f4fa0");

      updateColorAndHeight(barsHTML[i], barHeights[i], "#018b7f");
      updateColorAndHeight(barsHTML[j], barHeights[j], "#018b7f");

      i += 1;
    }
  }
  updateColorAndHeight(barsHTML[start], barHeights[start], "#8f4fa0");
  updateColorAndHeight(barsHTML[i - 1], barHeights[i - 1], "#8f4fa0");

  temp = barHeights[start]; //put the pivot element in its proper place.
  barHeights[start] = barHeights[i - 1];
  barHeights[i - 1] = temp;

  updateColorAndHeight(barsHTML[start], barHeights[start], "#8f4fa0");
  updateColorAndHeight(barsHTML[i - 1], barHeights[i - 1], "#8f4fa0");

  for (t = start; t <= i; t++) {
    updateColorAndHeight(barsHTML[t], barHeights[t], "#002e17");
  }

  return i - 1; //return the position of the pivot
}

// function to be called recursively
function quick_Sort(start, end) {
  if (start < end) {
    //stores the position of pivot element
    let pivotPosition = divideArray(start, end);
    quick_Sort(start, pivotPosition - 1); //sorts the left side of pivot.
    quick_Sort(pivotPosition + 1, end); //sorts the right side of pivot.
  }
}

quickSortBtn.addEventListener("click", quickSort);

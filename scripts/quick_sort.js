// basic function
function quickSort() {
  delayAnimation = 0;
  quick_Sort(0, arraySize - 1);
}

function divideArray(start, end) {
  let i = start + 1;
  let pivot = barHeights[start]; //make the first element as pivot element.
  updateColorAndHeight(barsHTML[start], barHeights[start], "yellow");

  for (j = start + 1; j <= end; j++) {
    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    if (barHeights[j] < pivot) {
      updateColorAndHeight(barsHTML[j], barHeights[j], "yellow");

      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[j], barHeights[j], "red");

      let temp = barHeights[i];
      barHeights[i] = barHeights[j];
      barHeights[j] = temp;

      updateColorAndHeight(barsHTML[i], barHeights[i], "red");
      updateColorAndHeight(barsHTML[j], barHeights[j], "red");

      updateColorAndHeight(barsHTML[i], barHeights[i], "blue");
      updateColorAndHeight(barsHTML[j], barHeights[j], "blue");

      i += 1;
    }
  }
  updateColorAndHeight(barsHTML[start], barHeights[start], "red");
  updateColorAndHeight(barsHTML[i - 1], barHeights[i - 1], "red");

  temp = barHeights[start]; //put the pivot element in its proper place.
  barHeights[start] = barHeights[i - 1];
  barHeights[i - 1] = temp;

  updateColorAndHeight(barsHTML[start], barHeights[start], "red");
  updateColorAndHeight(barsHTML[i - 1], barHeights[i - 1], "red");

  for (t = start; t <= i; t++) {
    updateColorAndHeight(barsHTML[t], barHeights[t], "green");
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

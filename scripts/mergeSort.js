function mergeSort() {
  delayAnimation = 0;
  makePartitions(0, arraySize - 1);
}

function merge_Sort(start, mid, end) {
  let x = start,
    y = mid + 1;

  let Arr = [],
    z = 0;

  for (i = start; i <= end; i++) {
    if (x > mid) {
      Arr[z++] = barHeights[y++];
      updateColorAndHeight(barsHTML[y - 1], barHeights[y - 1], "red");
    } else if (y > end) {
      Arr[z++] = barHeights[x++];
      updateColorAndHeight(barsHTML[x - 1], barHeights[x - 1], "red");
    } else if (barHeights[x] < barHeights[y]) {
      Arr[z++] = barHeights[x++];
      updateColorAndHeight(barsHTML[x - 1], barHeights[x - 1], "red");
    } else {
      Arr[z++] = barHeights[y++];
      updateColorAndHeight(barsHTML[y - 1], barHeights[y - 1], "red");
    }
  }

  for (t = 0; t < z; t++) {
    barHeights[start++] = Arr[t];
    updateColorAndHeight(barsHTML[start - 1], barHeights[start - 1], "green");
  }
}

function makePartitions(start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    updateColorAndHeight(barsHTML[mid], barHeights[mid], "yellow");

    makePartitions(start, mid);
    makePartitions(mid + 1, end);

    merge_Sort(start, mid, end);
  }
}

mergeSortBtn.addEventListener("click", mergeSort);

function heapSort() {
  delayAnimation = 0;
  heap_Sort();
}

function swapElements(i, j) {
  updateColorAndHeight(barsHTML[i], barHeights[i], "red");
  updateColorAndHeight(barsHTML[j], barHeights[j], "red");

  let temp = barHeights[i];
  barHeights[i] = barHeights[j];
  barHeights[j] = temp;

  updateColorAndHeight(barsHTML[i], barHeights[i], "red");
  updateColorAndHeight(barsHTML[j], barHeights[j], "red");

  updateColorAndHeight(barsHTML[i], barHeights[i], "blue");
  updateColorAndHeight(barsHTML[j], barHeights[j], "blue");
}

function maxHeapify(n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && barHeights[left] > barHeights[largest]) {
    if (largest != i) {
      updateColorAndHeight(barsHTML[largest], barHeights[largest], "blue");
    }

    largest = left;

    updateColorAndHeight(barsHTML[largest], barHeights[largest], "red");
  }

  if (right < n && barHeights[right] > barHeights[largest]) {
    if (largest != i) {
      updateColorAndHeight(barsHTML[largest], barHeights[largest], "blue");
    }

    largest = right;

    updateColorAndHeight(barsHTML[largest], barHeights[largest], "red");
  }

  if (largest != i) {
    swapElements(i, largest);

    maxHeapify(n, largest);
  }
}

function heap_Sort() {
  for (i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
    maxHeapify(arraySize, i);
  }

  for (i = arraySize - 1; i > 0; i--) {
    swapElements(0, i);
    updateColorAndHeight(barsHTML[i], barHeights[i], "green");
    updateColorAndHeight(barsHTML[i], barHeights[i], "yellow");

    maxHeapify(i, 0);

    updateColorAndHeight(barsHTML[i], barHeights[i], "blue");
    updateColorAndHeight(barsHTML[i], barHeights[i], "green");
  }
  updateColorAndHeight(barsHTML[i], barHeights[i], "green");
}

heapSortBtn.addEventListener("click", heapSort);

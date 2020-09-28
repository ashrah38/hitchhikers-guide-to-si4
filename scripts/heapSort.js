function heapSort() {
  delayAnimation = 0;
  heap_Sort();
}

function swapElements(i, j) {
  updateColorAndHeight(barsHTML[i], barHeights[i], "#8f4fa0");
  updateColorAndHeight(barsHTML[j], barHeights[j], "#8f4fa0");

  let temp = barHeights[i];
  barHeights[i] = barHeights[j];
  barHeights[j] = temp;

  updateColorAndHeight(barsHTML[i], barHeights[i], "#8f4fa0");
  updateColorAndHeight(barsHTML[j], barHeights[j], "#8f4fa0");

  updateColorAndHeight(barsHTML[i], barHeights[i], "#018b7f");
  updateColorAndHeight(barsHTML[j], barHeights[j], "#018b7f");
}

function maxHeapify(n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && barHeights[left] > barHeights[largest]) {
    if (largest != i) {
      updateColorAndHeight(barsHTML[largest], barHeights[largest], "#018b7f");
    }

    largest = left;

    updateColorAndHeight(barsHTML[largest], barHeights[largest], "#8f4fa0");
  }

  if (right < n && barHeights[right] > barHeights[largest]) {
    if (largest != i) {
      updateColorAndHeight(barsHTML[largest], barHeights[largest], "#018b7f");
    }

    largest = right;

    updateColorAndHeight(barsHTML[largest], barHeights[largest], "#8f4fa0");
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
    updateColorAndHeight(barsHTML[i], barHeights[i], "#002e17");
    updateColorAndHeight(barsHTML[i], barHeights[i], "#cbc412");

    maxHeapify(i, 0);

    updateColorAndHeight(barsHTML[i], barHeights[i], "#018b7f");
    updateColorAndHeight(barsHTML[i], barHeights[i], "#002e17");
  }
  updateColorAndHeight(barsHTML[i], barHeights[i], "#002e17");
}

heapSortBtn.addEventListener("click", heapSort);

// Time
// Best Case: O(n log n).
// Worst Case: O(n²).
// Average Case: O(n log n).

// Space
// Best/Average Case: O(log n).
// Worst Case: O(n).

const quickSort = (array, left, right) => {
  if (left < right) {
    const pivotIndex = partition(array, array[right], left, right);

    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
};

const partition = (array, pivot, left, right) => {
  let i = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      swap(array, i, j);
      i++;
    }
  }

  swap(array, i, right);
  return i;
};

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

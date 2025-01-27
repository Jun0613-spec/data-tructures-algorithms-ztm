// Time O(n)^2
// Space O(1)
const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // Find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // Move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(insertionSort(numbers));

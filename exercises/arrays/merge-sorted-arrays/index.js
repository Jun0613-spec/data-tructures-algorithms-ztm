// Time O(n + m)
// Space O(n)
const mergeSortedArrays = (arr1, arr2) => {
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in array1
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }

  // If there are remaining elements in array2
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }

  return mergedArray;
};

let array1, array2;

array1 = [0, 3, 4, 31];
array2 = [4, 6, 30];
console.log(mergeSortedArrays(array1, array2)); // Expected: [0, 3, 4, 4, 6, 30, 31]

array1 = [1, 2, 3];
array2 = [];
console.log(mergeSortedArrays(array1, array2)); // Expected: [1, 2, 3]

array1 = [];
array2 = [];
console.log(mergeSortedArrays(array1, array2)); // Expected: []

array1 = [2, 2, 2];
array2 = [2, 2];
console.log(mergeSortedArrays(array1, array2)); // Expected: [2, 2, 2, 2, 2]

array1 = [-5, -3, 0];
array2 = [-4, -1, 2];
console.log(mergeSortedArrays(array1, array2)); // Expected: [-5, -4, -3, -1, 0, 2]

array1 = [-10, -5, 0, 5];
array2 = [-7, -3, 2, 10];
console.log(mergeSortedArrays(array1, array2)); // Expected: [-10, -7, -5, -3, 0, 2, 5, 10]

array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 8, 9, 10];
console.log(mergeSortedArrays(array1, array2)); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array1 = [1];
array2 = [2];
console.log(mergeSortedArrays(array1, array2)); // Expected: [1, 2]

array1 = [5, 5, 5];
array2 = [5, 5, 5];
console.log(mergeSortedArrays(array1, array2)); // Expected: [5, 5, 5, 5, 5, 5]

array1 = [1000000, 1000001];
array2 = [999999, 1000002];
console.log(mergeSortedArrays(array1, array2)); // Expected: [999999, 1000000, 1000001, 1000002]

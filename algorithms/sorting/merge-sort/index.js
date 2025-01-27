const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Time O(n log n)
// Space O(n)

const mergeSort = (array) => {
  if (array.length === 1) return array;

  // Split Array in into right and left
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};

const answer = mergeSort(numbers);
console.log(answer);

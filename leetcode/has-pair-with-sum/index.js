// Time O(n)^2
// Space O(1)
const hasPairWithSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
};

// Time O(n)
// Space O(n)
const hasPairWithSum2 = (arr, sum) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) return true;

    map.set(sum - arr[i], true);
  }

  return false;
};

let array = [6, 4, 3, 2, 1, 7];
let sum = 9;

let array1 = [1, 2, 3, 4, 5];
let sum1 = 7;

let array2 = [10, 15, 3, 7];
let sum2 = 17;

let array3 = [1, 2, 3, 4, 5];
let sum3 = 10;

let array4 = [3, 1, 4, 1, 5];
let sum4 = 6;

let array5 = [1, 5, 7, -1];
let sum5 = 6;

let array6 = [-3, -2, -1, 0, 1];
let sum6 = 0;

let array7 = [0, 0, 0, 0, 0];
let sum7 = 0;

let array8 = [1, 2, 3, 4];
let sum8 = 8;

console.log(hasPairWithSum(array, sum)); // true
console.log(hasPairWithSum2(array, sum)); // true

console.log(hasPairWithSum(array1, sum1)); // true
console.log(hasPairWithSum2(array1, sum1)); // true

console.log(hasPairWithSum(array2, sum2)); // true
console.log(hasPairWithSum2(array2, sum2)); // true

console.log(hasPairWithSum(array3, sum3)); // false
console.log(hasPairWithSum2(array3, sum3)); // false

console.log(hasPairWithSum(array4, sum4)); // true
console.log(hasPairWithSum2(array4, sum4)); // true

console.log(hasPairWithSum(array5, sum5)); // true
console.log(hasPairWithSum2(array5, sum5)); // true

console.log(hasPairWithSum(array6, sum6)); // true
console.log(hasPairWithSum2(array6, sum6)); // true

console.log(hasPairWithSum(array7, sum7)); // true
console.log(hasPairWithSum2(array7, sum7)); // true

console.log(hasPairWithSum(array8, sum8)); // false
console.log(hasPairWithSum2(array8, sum8)); // false

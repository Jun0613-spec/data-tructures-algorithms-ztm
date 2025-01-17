// Give 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// for Example:
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];
// shouold return false.

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true;

// Time O(n * m)
// Space space O(1)
const containsCommonItems = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }

  return false;
};

// Time O(n + m)
// Space O(n)
const containsCommonItems2 = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;

  const set = new Set(arr1);

  for (const item of arr2) {
    if (set.has(item)) return true;
  }

  return false;
};

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

console.log(containsCommonItems(array1, array2));
console.log(containsCommonItems2(array1, array2));

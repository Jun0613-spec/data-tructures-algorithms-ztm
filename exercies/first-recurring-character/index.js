//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// Time O(n)^2
// Space O(1)
const firstRecurringCharacter = (array) => {
  if (array.length <= 1) return undefined;

  let result;
  let minIndex = array.length;

  for (let i = 0; i < minIndex; i++) {
    for (let j = i + 1; j < minIndex; j++) {
      if (array[i] === array[j] && j < minIndex) {
        minIndex = j;
        result = array[i];
      }
    }
  }

  return result;
};

// Time O(n)
// Space O(n)
const firstRecurringCharacter2 = (array) => {
  if (array.length <= 1) return undefined;

  const set = new Set();

  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      return array[i];
    } else {
      set.add(array[i]);
    }
  }

  return undefined;
};

// Time O(n)
// Spoace O(n)
const firstRecurringCharacter3 = (array) => {
  if (array.length <= 1) return undefined;

  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      return array[i];
    } else {
      map.set(array[i], i);
    }
  }

  return undefined;
};

let array;

array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(array)); // Output: 2

array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(array)); // Output: 1

array = [2, 3, 4, 5];
console.log(firstRecurringCharacter(array)); // Output: undefined

array = [2, 5, 5, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(array)); // Output: 5

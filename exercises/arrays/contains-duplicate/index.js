// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Time O(n)^2
// Space O(1)
const containsDuplicate = (nums) => {
  if (!nums || nums.length === 1) return false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }

  return false;
};

// Time O(n)
// Space O(n)
const containsDuplicate2 = (nums) => {
  if (!nums || nums.length === 1) return false;

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);
  }

  return false;
};

// Time O(n)
// Space O(n)
const containsDuplicate3 = (nums) => {
  if (!nums || nums.length === 1) return false;

  const set = new Set(nums);

  return set.size !== nums.length;
};

let nums;

nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); // Output: true
console.log(containsDuplicate2(nums));
console.log(containsDuplicate3(nums));

nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums)); // Output: false
console.log(containsDuplicate2(nums));
console.log(containsDuplicate3(nums));

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums)); // Output: true
console.log(containsDuplicate2(nums));
console.log(containsDuplicate3(nums));

// 169. Majority Element

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Time O(n)
// Space O(1)
const majorityElement = (nums) => {
  let candidate = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) candidate = num;

    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

let nums;

nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output 3

nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums)); // Output 2

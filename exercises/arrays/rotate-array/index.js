// 189. Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]

// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Time O(n)
// Space O(1)
const rotate = (nums, k) => {
  k = k & nums.length;

  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};

let nums, k;

nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
console.log(rotate(nums, k)); // Output: [5,6,7,1,2,3,4]

nums = [-1, -100, 3, 99];
k = 2;
console.log(rotate(nums, k)); // Output: [3,99,-1,-100]

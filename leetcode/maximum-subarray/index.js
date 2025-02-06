// 53. Maximum Subarray
// Given an integer array nums, find the
// subarray
// with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Time O(n)
// Space O(1)
const maxSubArray = (nums) => {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;

    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];

      maxSum = Math.max(currentSum, maxSum);
    }
  }

  return maxSum;
};

// Time O(n)
// Space O(1)
const maxSubArray2 = (nums) => {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

let nums;

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6
console.log(maxSubArray2(nums));

nums = [1];
console.log(maxSubArray(nums)); // Output: 1
console.log(maxSubArray2(nums));

nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums)); // Output: 23
console.log(maxSubArray2(nums));

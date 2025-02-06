// 371. Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:
// Input: a = 1, b = 2
// Output: 3

// Example 2:
// Input: a = 2, b = 3
// Output: 5

// Time O(log(max(a, b)))
// Space O(1)
const getSum = (a, b) => {
  while (b) {
    let sum = a ^ b;
    let carry = (a & b) << 1;

    a = sum;
    b = carry;
  }
  return a;
};

let a, b;

(a = 1), (b = 2);
console.log(getSum(a, b)); // Output: 3

(a = 2), (b = 3);
console.log(getSum(a, b)); // Output: 5

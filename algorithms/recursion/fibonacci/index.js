// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// Time O(n)
// Space O(1)
const fibonacciIterative = (n) => {
  if (n < 2) return n;

  let prev = 0,
    curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

// Time O(2^n) O of 2 to the power of n
// Space O(n)
const fibonacciRecursive = (n) => {
  if (n < 2) return n;

  return fibonacciIterative(n - 2) + fibonacciRecursive(n - 1);
};

let number;

number = 6;
console.log(fibonacciIterative(number));
console.log(fibonacciRecursive(number));

number = 5;
console.log(fibonacciIterative(number));
console.log(fibonacciRecursive(number));

number = 2;
console.log(fibonacciIterative(number));
console.log(fibonacciRecursive(number));

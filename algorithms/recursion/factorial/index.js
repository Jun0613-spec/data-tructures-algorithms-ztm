// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// Time O(n)
// Space O(n)
const findFactorialRecursive = (n) => {
  if (n <= 1) return 1;

  return n * findFactorialRecursive(n - 1);
};

// Time O(n)
// Space O(1)
const findFactorialIterative = (n) => {
  let answer = 1;

  for (let i = 1; i <= n; i++) {
    answer *= i;
  }

  return answer;
};

let number;

number = 1;
console.log(findFactorialIterative(number));
console.log(findFactorialRecursive(number));

number = 5;
console.log(findFactorialIterative(number));
console.log(findFactorialRecursive(number));

number = 2;
console.log(findFactorialIterative(number));
console.log(findFactorialRecursive(number));

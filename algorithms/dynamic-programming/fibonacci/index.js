let calculations = 0;

// recursive stack
// Time O(n)^2
// Space O(n)
const fibonacci = (n) => {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Memoized Fibonacci
// Time O(n)
// Space O(n)
const fibonacci2 = () => {
  let memo = {};

  const fib = (n) => {
    calculations++;
    if (n < 2) return n;

    if (n in memo) return memo[n];

    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };

  return fib;
};

// Time O(n)
// Space O(1)
const fibonacci3 = (n) => {
  if (n < 2) return n;

  let [a, b] = [0, 1];

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
};

console.log("Slow", fibonacci(35));

const memoizedFibonacci = fibonacci2();
console.log("Faster", memoizedFibonacci(35));
console.log("Faster2", fibonacci3(35));
console.log("Calculations:", calculations);

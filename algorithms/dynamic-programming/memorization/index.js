const addTo80 = (n) => {
  console.log("long time");
  return n + 80;
};

const memoizedAddTo80 = () => {
  let cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    }

    const answer = n + 80;
    cache[n] = answer;

    return answer;
  };
};

console.log(addTo80(5));
console.log(memoizedAddTo80(10));

const memoized = memoizedAddTo80();
console.log(1, memoized(6));
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6));

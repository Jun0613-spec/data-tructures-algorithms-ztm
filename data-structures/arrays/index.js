//                 Arrys
//
//       Pros                  Cons
// 1. Fast lookups       1. Slow inserts
// 2. Fast push/pop      2. Slow deletes
// 3. Ordered            3. Fixed size

const strings = ["a", "b", "c", "d"];
//4 * 4 = 16 bytes of storage

// push
strings.push("e"); // O(1)

// pop
strings.pop();
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); //O(n)

console.log(strings);

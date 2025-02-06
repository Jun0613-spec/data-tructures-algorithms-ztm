// Create a function that reverses a string:
// "Hi My name is Andrei" should be:
// "ierdnA si eman iH"

// Time O(n)
// Space O(n)
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// Time O(n)
// Space O(n)
const reverseString2 = (str) => {
  if (!str || str.length < 2) return str;

  let reversed = "";

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
};

let strings;

strings = "Hi My name is Andrei";
console.log(reverseString(strings)); // Expected output: "ierdnA si eman yM iH"
console.log(reverseString2(strings));

strings = "Hello";
console.log(reverseString(strings)); // Expected output: "olleH"
console.log(reverseString2(strings));

strings = "";
console.log(reverseString(strings)); // Expected output: ""
console.log(reverseString2(strings));

strings = "12345";
console.log(reverseString(strings)); // Expected output: "54321"
console.log(reverseString2(strings));

strings = "!@#$$%^&*()";
console.log(reverseString(strings)); // Expected output: ")(*&^%$$#@!"
console.log(reverseString2(strings));

strings = "madam";
console.log(reverseString(strings)); // Expected output: "madam"
console.log(reverseString2(strings));

strings = "     ";
console.log(reverseString(strings)); // Expected output: "     "
console.log(reverseString2(strings));

strings = "AbC 123! XyZ";
console.log(reverseString(strings)); // Expected output: "ZyX !321 CbA"
console.log(reverseString2(strings));

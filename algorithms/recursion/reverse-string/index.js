// Time O(n)
// Space O(n)
const reverseString = (str) => {
  if (str.length <= 1) return str;

  return str.split("").reverse().join("");
};

reverseString("yoyo master");

// Time O(n)^2
// Space O(n)
const reverseStringRecursive = (str) => {
  if (str.length <= 1) return str;

  return reverseStringRecursive(str.slice(1)) + str[0];
};

let string;

string = "yoyo master";
console.log(reverseString(string));
console.log(reverseStringRecursive(string));

string = "hello";
console.log(reverseString(string));
console.log(reverseStringRecursive(string));

string = "a";
console.log(reverseString(string));
console.log(reverseStringRecursive(string));

string = " ";
console.log(reverseString(string));
console.log(reverseStringRecursive(string));

string = "!@#$%^&*";
console.log(reverseString(string));
console.log(reverseStringRecursive(string));

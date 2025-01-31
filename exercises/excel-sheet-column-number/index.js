// 171. Excel Sheet Column Number

// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

// Time O(n)
// Space O(1)
const titleToNumber = (columnTitle) => {
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    let value = columnTitle[i].charCodeAt(0) - "A".charCodeAt(0) + 1;

    result = result * 26 + value;
  }

  return result;
};

let columnTitle;

columnTitle = "A";
console.log(titleToNumber(columnTitle)); // Output: 1

columnTitle = "AB";
console.log(titleToNumber(columnTitle)); // Output: 28

columnTitle = "ZY";
console.log(titleToNumber(columnTitle)); // Output: 701

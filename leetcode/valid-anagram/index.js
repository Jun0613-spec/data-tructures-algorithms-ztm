// 242. Valid Anagram

// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Time O(n)
// Space O(n)
// export const isAnagram = (s, t) => {
//   if (s.length !== t.length) return false;

//   const count = new Map();

//   for (const char of s) {
//     count.set(char, (count.get(char) || 0) + 1);
//   }

//   for (const char of t) {
//     if (!count.has(char) || count.get(char) === 0) return false;
//     count.set(char, count.get(char) - 1);
//   }

//   return true;
// };

// Time O(n)
// Space O(1)
export const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);

  for (const char of s) {
    count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (const char of t) {
    count[char.charCodeAt(0) - "a".charCodeAt(0)]--;

    if (count[char.charCodeAt(0) - "a".charCodeAt(0)] < 0) {
      return false;
    }
  }

  return true;
};

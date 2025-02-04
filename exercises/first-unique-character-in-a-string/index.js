// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Time O(n)
// Space O(n)
// export const firstUniqChar = (s) => {
//   const seen = {};

//   for (const char of s) {
//     seen[char] = (seen[char] || 0) + 1;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (seen[s[i]] === 1) return i;
//   }

//   return -1;
// };

// Time O(n)
// Space O(n)
export const firstUniqChar = (s) => {
  const seen = new Map();

  for (const char of s) {
    seen.set(char, (seen.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (seen.get(s[i]) === 1) return i;
  }

  return -1;
};

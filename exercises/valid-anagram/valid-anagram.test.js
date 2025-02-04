import { describe, it, expect } from "vitest";
import { isAnagram } from "./index";

describe("isAnagram", () => {
  const testCases = [
    { s: "anagram", t: "nagaram", expected: true },
    { s: "rat", t: "car", expected: false },
    { s: "listen", t: "silent", expected: true },
    { s: "hello", t: "ollhe", expected: true },
    { s: "hello", t: "world", expected: false },
    { s: "", t: "", expected: true },
    { s: "a", t: "a", expected: true },
    { s: "a", t: "b", expected: false }
  ];

  testCases.forEach(({ s, t, expected }, index) => {
    it(`Test case #${index + 1}: isAnagram(${s}, ${t})`, () => {
      const result = isAnagram(s, t);

      console.log(`isAnagram("${s}", "${t}") => ${result}`);
      expect(result).toBe(expected);
    });
  });
});

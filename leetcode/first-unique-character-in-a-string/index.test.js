import { describe, it, expect } from "vitest";
import { firstUniqChar } from "./index";

describe("First Unique Character", () => {
  it('should return 0 for the input "leetcode"', () => {
    expect(firstUniqChar("leetcode")).toBe(0);
  });

  it('should return 2 for the input "loveleetcode"', () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });

  it('should return -1 for the input "aabb"', () => {
    expect(firstUniqChar("aabb")).toBe(-1);
  });

  it('should return 0 for a single character string "z"', () => {
    expect(firstUniqChar("z")).toBe(0);
  });

  it('should return 0 for a string with all unique characters "abc"', () => {
    expect(firstUniqChar("abc")).toBe(0);
  });

  it('should return 2 for the input "aabcc"', () => {
    expect(firstUniqChar("aabcc")).toBe(2);
  });

  it("should return -1 for an empty string", () => {
    expect(firstUniqChar("")).toBe(-1);
  });
});

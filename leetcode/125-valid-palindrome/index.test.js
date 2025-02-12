import { describe, it, expect } from "vitest";

import { isPalindrome } from "./index";

describe("isPalindrome function", () => {
  it("should return true for a valid palindrome string with mixed case and spaces", () => {
    const input = "A man, a plan, a canal: Panama";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });

  it("should return false for a string that is not a palindrome", () => {
    const input = "race a car";
    const result = isPalindrome(input);
    expect(result).toBe(false);
  });

  it("should return true for an empty string", () => {
    const input = " ";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });

  it("should return true for a single character string", () => {
    const input = "A";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });

  it("should return true for a string with only alphanumeric characters and no spaces", () => {
    const input = "12321";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });

  it("should return false for a string with mismatched characters", () => {
    const input = "hello";
    const result = isPalindrome(input);
    expect(result).toBe(false);
  });

  it("should return true for a string with punctuation marks but is still a palindrome", () => {
    const input = "No 'x' in Nixon";
    const result = isPalindrome(input);
    expect(result).toBe(true);
  });
});

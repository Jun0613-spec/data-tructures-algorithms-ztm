import { describe, expect, test } from "vitest";
import { missingNumber } from "./index";

describe("missingNumber", () => {
  test("should return the missing number in the array [3, 0, 1]", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test("should return the missing number in the array [0, 1]", () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  test("should return the missing number in the array [9, 6, 4, 2, 3, 5, 7, 0, 1]", () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });

  test("should return the missing number in the array with a single element [1]", () => {
    expect(missingNumber([1])).toBe(0);
  });

  test("should return 0 if the array contains all numbers from 1 to n", () => {
    expect(missingNumber([0])).toBe(1);
  });

  test("should handle the case where the missing number is at the beginning of the range", () => {
    expect(missingNumber([1, 2, 3])).toBe(0);
  });

  test("should handle the case where the missing number is at the end of the range", () => {
    expect(missingNumber([0, 1, 2])).toBe(3);
  });
});

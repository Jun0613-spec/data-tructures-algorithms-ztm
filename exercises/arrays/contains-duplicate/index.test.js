import { describe, it, expect } from "vitest";
import {
  containsDuplicate,
  containsDuplicate2,
  containsDuplicate3
} from "./index";

describe("containsDuplicate", () => {
  const testCases = [
    { nums: [1, 2, 3, 1], expected: true },
    { nums: [1, 2, 3, 4], expected: false },
    { nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
    { nums: [], expected: false },
    { nums: [5], expected: false }
  ];

  testCases.forEach(({ nums, expected }, index) => {
    it(`Test case #${index + 1} - containsDuplicate(${JSON.stringify(
      nums
    )})`, () => {
      const result = containsDuplicate(nums);
      console.log(`containsDuplicate(${JSON.stringify(nums)}) => ${result}`);
      expect(result).toBe(expected);
    });

    it(`Test case #${index + 1} - containsDuplicate2(${JSON.stringify(
      nums
    )})`, () => {
      const result = containsDuplicate2(nums);
      console.log(`containsDuplicate2(${JSON.stringify(nums)}) => ${result}`);
      expect(result).toBe(expected);
    });

    it(`Test case #${index + 1} - containsDuplicate3(${JSON.stringify(
      nums
    )})`, () => {
      const result = containsDuplicate3(nums);
      console.log(`containsDuplicate3(${JSON.stringify(nums)}) => ${result}`);
      expect(result).toBe(expected);
    });
  });
});

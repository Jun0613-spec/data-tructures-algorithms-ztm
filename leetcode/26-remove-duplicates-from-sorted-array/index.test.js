import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./index";

describe("removeDuplicates", () => {
  it("should return the number of unique elements and modify the array in-place", () => {
    const nums1 = [1, 1, 2];
    const result1 = removeDuplicates(nums1);
    expect(result1).toBe(2);
    expect(nums1.slice(0, result1)).toEqual([1, 2]);

    const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result2 = removeDuplicates(nums2);
    expect(result2).toBe(5);
    expect(nums2.slice(0, result2)).toEqual([0, 1, 2, 3, 4]);

    const nums3 = [1, 1, 1, 1, 1];
    const result3 = removeDuplicates(nums3);
    expect(result3).toBe(1);
    expect(nums3.slice(0, result3)).toEqual([1]);

    const nums4 = [];
    const result4 = removeDuplicates(nums4);
    expect(result4).toBe(0);
    expect(nums4).toEqual([]);
  });

  it("should handle an already unique array", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = removeDuplicates(nums);
    expect(result).toBe(5);
    expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return 0 for an empty array", () => {
    const nums = [];
    const result = removeDuplicates(nums);
    expect(result).toBe(0);
    expect(nums).toEqual([]);
  });
});

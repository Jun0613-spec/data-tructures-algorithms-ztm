import { describe, it, expect } from "vitest";
import { intersect } from "./index";

describe("Intersection of Two Arrays II", () => {
  it("should return [2,2] for nums1 = [1,2,2,1] and nums2 = [2,2]", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
  });

  it("should return [4,9] or [9,4] for nums1 = [4,9,5] and nums2 = [9,4,9,8,4]", () => {
    const result = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(result.sort()).toEqual([4, 9]);
  });

  it("should return [] when there is no intersection", () => {
    expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it("should handle cases with duplicate elements", () => {
    expect(intersect([1, 1, 1, 2, 2], [1, 1, 2, 3])).toEqual([1, 1, 2]);
  });

  it("should handle empty arrays", () => {
    expect(intersect([], [1, 2, 3])).toEqual([]);
    expect(intersect([1, 2, 3], [])).toEqual([]);
  });
});

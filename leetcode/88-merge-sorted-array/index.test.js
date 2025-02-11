import { describe, it, expect } from "vitest";

import { merge } from "./index";

describe("merge", () => {
  it("should merge [1,2,3] and [2,5,6] correctly", () => {
    let nums1 = [1, 2, 3, 0, 0, 0],
      m = 3;
    let nums2 = [2, 5, 6],
      n = 3;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("should merge [1] and [] correctly", () => {
    let nums1 = [1],
      m = 1;
    let nums2 = [],
      n = 0;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });

  it("should merge [] and [1] correctly", () => {
    let nums1 = [0],
      m = 0;
    let nums2 = [1],
      n = 1;
    merge(nums1, m, nums2, n);
    expect(nums1).toEqual([1]);
  });
});

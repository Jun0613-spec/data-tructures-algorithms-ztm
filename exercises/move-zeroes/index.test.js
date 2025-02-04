import { describe, it, expect } from "vitest";
import { moveZeroes } from "./index";

describe("moveZeroes", () => {
  it("should move all zeros to the end while maintaining order", () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    console.log("Output:", nums); // Log the output
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });

  it("should handle an array with a single zero", () => {
    const nums = [0];
    moveZeroes(nums);
    console.log("Output:", nums);
    expect(nums).toEqual([0]);
  });

  it("should handle an array with no zeros", () => {
    const nums = [1, 2, 3, 4];
    moveZeroes(nums);
    console.log("Output:", nums);
    expect(nums).toEqual([1, 2, 3, 4]);
  });

  it("should handle an array with all zeros", () => {
    const nums = [0, 0, 0, 0];
    moveZeroes(nums);
    console.log("Output:", nums);
    expect(nums).toEqual([0, 0, 0, 0]);
  });

  it("should handle an already sorted array", () => {
    const nums = [1, 2, 3, 0, 0];
    moveZeroes(nums);
    console.log("Output:", nums);
    expect(nums).toEqual([1, 2, 3, 0, 0]);
  });

  it("should handle an empty array", () => {
    const nums = [];
    moveZeroes(nums);
    console.log("Output:", nums);
    expect(nums).toEqual([]);
  });
});

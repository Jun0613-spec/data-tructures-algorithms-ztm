import { describe, expect, it } from "vitest";
import { climbStairs } from "./index";

describe("climbStairs", () => {
  it("should return 1 for n = 1", () => {
    expect(climbStairs(1)).toBe(1);
  });

  it("should return 2 for n = 2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  it("should return 3 for n = 3", () => {
    expect(climbStairs(3)).toBe(3);
  });

  it("should return 5 for n = 4", () => {
    expect(climbStairs(4)).toBe(5);
  });

  it("should return 8 for n = 5", () => {
    expect(climbStairs(5)).toBe(8);
  });

  it("should return 89 for n = 10", () => {
    expect(climbStairs(10)).toBe(89);
  });

  it("should return 10946 for n = 20", () => {
    expect(climbStairs(20)).toBe(10946);
  });

  it("should return 0 for n = 0", () => {
    expect(climbStairs(0)).toBe(0);
  });

  it("should handle negative input (return 0)", () => {
    expect(climbStairs(-5)).toBe(0);
  });
});

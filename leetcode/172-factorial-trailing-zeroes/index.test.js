import { describe, it, expect } from "vitest";

import { trailingZeroes } from "./index";

describe("Factorial Trailing Zeroes", () => {
  it("should return 0 for n = 0", () => {
    expect(trailingZeroes(0)).toBe(0);
  });

  it("should return 0 for n = 3", () => {
    expect(trailingZeroes(3)).toBe(0);
  });

  it("should return 1 for n = 5", () => {
    expect(trailingZeroes(5)).toBe(1);
  });

  it("should return 2 for n = 10", () => {
    expect(trailingZeroes(10)).toBe(2);
  });

  it("should return 6 for n = 25", () => {
    expect(trailingZeroes(25)).toBe(6);
  });

  it("should return 24 for n = 100", () => {
    expect(trailingZeroes(100)).toBe(24);
  });

  it("should return 249 for n = 1000", () => {
    expect(trailingZeroes(1000)).toBe(249);
  });
});

import { describe, expect, test } from "vitest";
import { isPowerOfThree } from "./index";

describe("isPowerOfThree", () => {
  test("should return true for n = 27", () => {
    expect(isPowerOfThree(27)).toBe(true);
  });

  test("should return false for n = 0", () => {
    expect(isPowerOfThree(0)).toBe(false);
  });

  test("should return false for n = -1", () => {
    expect(isPowerOfThree(-1)).toBe(false);
  });

  test("should return true for n = 1", () => {
    expect(isPowerOfThree(1)).toBe(true);
  });

  test("should return false for n = 45", () => {
    expect(isPowerOfThree(45)).toBe(false);
  });
});

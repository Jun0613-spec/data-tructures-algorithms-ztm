import { describe, expect, test } from "vitest";
import { isHappy } from "./index";

describe("isHappy", () => {
  test("Example 1: 19 is a happy number", () => {
    expect(isHappy(19)).toBe(true);
  });

  test("Example 2: 2 is not a happy number", () => {
    expect(isHappy(2)).toBe(false);
  });

  test("Edge Case: 1 is a happy number", () => {
    expect(isHappy(1)).toBe(true);
  });

  test("Edge Case: Large happy number", () => {
    expect(isHappy(7)).toBe(true);
  });

  test("Edge Case: Large unhappy number", () => {
    expect(isHappy(4)).toBe(false);
  });
});

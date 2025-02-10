import { describe, it, expect } from "vitest";

import { isValid } from "./index";

describe("Valid Parentheses", () => {
  it("should return true for s = '()'", () => {
    expect(isValid("()")).toBe(true);
  });

  it("should return true for s = '()[]{}'", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it("should return false for s = '(]'", () => {
    expect(isValid("(]")).toBe(false);
  });

  it("should return true for s = '([])'", () => {
    expect(isValid("([])")).toBe(true);
  });

  it("should return false for s = '([)]'", () => {
    expect(isValid("([)]")).toBe(false);
  });

  it("should return true for s = '{[()()]}'", () => {
    expect(isValid("{[()()]}")).toBe(true);
  });

  it("should return false for s = '('", () => {
    expect(isValid("(")).toBe(false);
  });

  it("should return false for s = ']' ", () => {
    expect(isValid("]")).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isValid("")).toBe(true);
  });
});

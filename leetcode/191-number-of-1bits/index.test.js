import { describe, expect, it } from "vitest";

import { hammingWeight } from "./index";

describe("hammingWeight", () => {
  it("should return 3 for n = 11 (binary: 1011)", () => {
    expect(hammingWeight(11)).toBe(3);
  });

  it("should return 1 for n = 128 (binary: 10000000)", () => {
    expect(hammingWeight(128)).toBe(1);
  });

  it("should return 30 for n = 2147483645", () => {
    expect(hammingWeight(2147483645)).toBe(30);
  });

  it("should return 0 for n = 0", () => {
    expect(hammingWeight(0)).toBe(0);
  });

  it("should return 32 for n = 4294967295 (all bits are 1)", () => {
    expect(hammingWeight(4294967295)).toBe(32);
  });
});

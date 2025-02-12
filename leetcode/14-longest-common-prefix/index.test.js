import { describe, it, expect } from "vitest";

import { longestCommonPrefix } from "./index";

describe("longestCommonPrefix", () => {
  it("should return the longest common prefix for a valid input", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    expect(
      longestCommonPrefix(["interspecies", "interstellar", "interstate"])
    ).toBe("inters");

    expect(longestCommonPrefix(["apple", "app", "apartment"])).toBe("ap");
  });

  it("should return an empty string when there is no common prefix", () => {
    expect(longestCommonPrefix(["cat", "dog", "bird"])).toBe("");
    expect(longestCommonPrefix(["one", "two", "three"])).toBe("");
  });

  it("should return the word itself if only one word is given", () => {
    expect(longestCommonPrefix(["single"])).toBe("single");
  });

  it("should return an empty string if the input array is empty", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  it("should handle an array of identical words", () => {
    expect(longestCommonPrefix(["test", "test", "test"])).toBe("test");
  });

  it("should handle words where one word is a prefix of another", () => {
    expect(longestCommonPrefix(["prefix", "pre", "prediction"])).toBe("pre");
  });
});

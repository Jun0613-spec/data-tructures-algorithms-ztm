import { describe, it, expect } from "vitest";

import { ListNode, isPalindrome } from "./index";

const createLinkedList = (values) => {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
};

describe("isPalindrome", () => {
  it("should return true for [1,2,2,1]", () => {
    const head = createLinkedList([1, 2, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it("should return false for [1,2]", () => {
    const head = createLinkedList([1, 2]);
    expect(isPalindrome(head)).toBe(false);
  });

  it("should return true for a single node [1]", () => {
    const head = createLinkedList([1]);
    expect(isPalindrome(head)).toBe(true);
  });

  it("should return true for an empty list", () => {
    expect(isPalindrome(null)).toBe(true);
  });
});

import { describe, it, expect } from "vitest";

import { ListNode, hasCycle } from "./index";

const createLinkedListWithCycle = (values, pos) => {
  if (values.length === 0) return null;

  let head = new ListNode(values[0]);
  let current = head;
  let cycleNode = pos === 0 ? head : null;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
    if (i === pos) cycleNode = current;
  }

  if (pos !== -1) {
    current.next = cycleNode;
  }

  return head;
};

describe("hasCycle", () => {
  it("should return true for a linked list with a cycle (Example 1)", () => {
    const head = createLinkedListWithCycle([3, 2, 0, -4], 1);
    expect(hasCycle(head)).toBe(true);
  });

  it("should return true for a linked list with a cycle (Example 2)", () => {
    const head = createLinkedListWithCycle([1, 2], 0);
    expect(hasCycle(head)).toBe(true);
  });

  it("should return false for a linked list without a cycle (Example 3)", () => {
    const head = createLinkedListWithCycle([1], -1);
    expect(hasCycle(head)).toBe(false);
  });

  it("should return false for an empty linked list", () => {
    expect(hasCycle(null)).toBe(false);
  });

  it("should return false for a single node without a cycle", () => {
    const head = new ListNode(1);
    expect(hasCycle(head)).toBe(false);
  });

  it("should return true for a single node with a cycle", () => {
    const head = new ListNode(1);
    head.next = head;
    expect(hasCycle(head)).toBe(true);
  });
});

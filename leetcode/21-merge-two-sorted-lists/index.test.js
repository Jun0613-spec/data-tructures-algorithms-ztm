import { describe, expect, test } from "vitest";
import { mergeTwoLists } from "./index";

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to convert an array to a linked list
const arrayToList = (arr) => {
  let dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
};

// Helper function to convert a linked list to an array (for testing)
const listToArray = (list) => {
  let arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
};

describe("mergeTwoLists", () => {
  test("Example 1", () => {
    const list1 = arrayToList([1, 2, 4]);
    const list2 = arrayToList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("Example 2: Both lists empty", () => {
    const list1 = arrayToList([]);
    const list2 = arrayToList([]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([]);
  });

  test("Example 3: One list empty", () => {
    const list1 = arrayToList([]);
    const list2 = arrayToList([0]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([0]);
  });

  test("Example 4: One list longer than the other", () => {
    const list1 = arrayToList([1, 2, 4, 5]);
    const list2 = arrayToList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5]);
  });
});

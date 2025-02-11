// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a
// palindrome
// or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Time O()
// Space O()
export const isPalindrome = (head) => {
  let slow = head;
  let fast = head;

  // Find middle (slow will be at the midpoint)
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half of the list
  let prev = null;

  while (slow) {
    let next = slow.next;

    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare first and second half
  let left = head,
    right = prev;

  while (right) {
    if (left.val !== right.val) return false;

    left = left.next;
    right = right.next;
  }

  return true;
};

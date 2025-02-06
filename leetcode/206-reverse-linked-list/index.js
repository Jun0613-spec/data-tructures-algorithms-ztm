// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reverseList = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

const createLinkedList = (arr) => {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

const printLinkedList = (head) => {
  let current = head;
  const result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
};

let head1 = createLinkedList([1, 2, 3, 4, 5]);
console.log("Reversed List 1:");
printLinkedList(reverseList(head1)); // Expected output: [5, 4, 3, 2, 1]

let head2 = createLinkedList([1, 2]);
console.log("Reversed List 2:");
printLinkedList(reverseList(head2)); // Expected output: [2, 1]

let head3 = createLinkedList([]);
console.log("Reversed List 3:");
printLinkedList(reverseList(head3)); // Expected output: []

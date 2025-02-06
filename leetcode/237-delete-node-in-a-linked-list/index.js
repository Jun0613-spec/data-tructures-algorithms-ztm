// 237. Delete Node in a Linked List

// There is a singly-linked list head and we want to delete a node node in it.
// You are given the node to be deleted node. You will not be given access to the first node of head.
// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Custom testing:
// For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
// We will build the linked list and pass the node to your function.
// The output will be the entire list after calling your function.

// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const deleteNode = (node) => {
  if (!node || !node.next) return;

  node.val = node.next.val;
  node.next = node.next.next;
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

const findNode = (head, val) => {
  let current = head;
  while (current !== null) {
    if (current.val === val) return current;
    current = current.next;
  }
  return null;
};

let head1 = createLinkedList([4, 5, 1, 9]);
let nodeToDelete1 = findNode(head1, 5);
if (nodeToDelete1) {
  deleteNode(nodeToDelete1);
}
console.log("Updated List 1:");
printLinkedList(head1); // Expected: [4, 1, 9]

let head2 = createLinkedList([4, 5, 1, 9]);
let nodeToDelete2 = findNode(head2, 1);
if (nodeToDelete2) {
  deleteNode(nodeToDelete2);
}
console.log("Updated List 2:");
printLinkedList(head2); // Expected: [4, 5, 9]

let head3 = createLinkedList([1, 2, 3, 4]);
let nodeToDelete3 = findNode(head3, 3);
if (nodeToDelete3) {
  deleteNode(nodeToDelete3);
}
console.log("Updated List 3:");
printLinkedList(head3); // Expected: [1, 2, 4]

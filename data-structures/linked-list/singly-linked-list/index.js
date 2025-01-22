// 10 --> 5 --> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.log("Invalid index");

      return this; // Invalid index, return the current list
    }

    const newNode = new Node(value);

    // Special case: insert at the beginning (index 0)
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode; // Set tail if list was empty
      this.length++;
      return this;
    }

    // Use traverseToIndex to get the node just before the index
    const previousNode = this.traverseToIndex(index - 1);

    newNode.next = previousNode.next;
    previousNode.next = newNode;

    // If the new node is inserted at the end, update the tail
    if (newNode.next === null) {
      this.tail = newNode;
    }

    this.length++;

    return this.printList;
  }

  remove(index) {
    const previousNode = this.traverseToIndex(index - 1);
    const deleteNode = previousNode.next;
    previousNode.next = deleteNode.next;

    this.length--;

    return this.printList;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this;
  }

  printList() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" --> "));
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(3);
myLinkedList.reverse();

myLinkedList.printList();

console.log(myLinkedList);

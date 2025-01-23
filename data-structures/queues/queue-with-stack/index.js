class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }

    return this.last[0];
  }

  enqueue(value) {
    for (let i = 0; i < this.first.length; i++) {
      this.last.push(this.first.pop());
    }

    this.last.push(value);

    return this;
  }

  dequeue() {
    for (let i = 0; i < this.first.length; i++) {
      this.first.push(this.last.pop());
    }

    this.first.pop();

    return this;
  }
}

const myQueue = new Queue();
console.log(myQueue.peek());
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
console.log(myQueue.peek());
console.log("========");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log("========");
console.log(myQueue.peek());

console.log(myQueue);

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value){
    // const newNode = new Node(value);
    this.array.push(value);
  }

  pop(){
    this.array.pop();
    return this;
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
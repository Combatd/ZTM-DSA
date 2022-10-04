class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append = function(value) {
    // const newNode = {
    //   value: value,
    //   next: null
    // };
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    // const newNode = {
    //   value: value,
    //   next: null
    // }
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
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

  insert = function(index, value) {
    const newNode = new Node(value);
    if (index >= this.length) {
      return this.append(value);
    }
    if(index === 0) {
      this.prepend(value);
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingPointer;
    holdingPointer.prev = newNode;
    this.length++;
    return this;
  }

  remove(index) {
    if (!this.head) {
      return undefined;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next // leader.next.next
    leader.next.prev = leader;
    this.length--;
    return this;
  }

  reverse = function() {
    if (!this.head.next) {
      return this;
    }
    let first = this.head;
    let second = first.next;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first; // after the loop, first will be the tail
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.insert(20, 88));
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
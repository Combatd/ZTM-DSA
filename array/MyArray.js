/*
Data Structures are things we build from scratch
We can create anything, even our own data structures
Most data structures are built on top of other data structures
*/

// Arrays in JavaScript are just objects with integer based keys
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get = function(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop = function() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems = function(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.push('hi'));
console.log(newArray.push('you'));
console.log(newArray.get(0));
newArray.push('are')
newArray.push('nice')
newArray.push('!');;
newArray.delete(1);
console.log(newArray);
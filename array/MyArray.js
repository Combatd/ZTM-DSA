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
}

const newArray = new MyArray();
console.log(newArray);
console.log(newArray.get(0));
// Stacks

// Google
// Udemy
// YouTube

// Arrays - Both would work, since we can pop off the end of the array, but arrays are easier to implement, arrays will have to double moemory available as previous memory capacity is reached
// Linked Lists - More memory might be used to hold pointers, but more dynamic memory is available



// Queues

// Head - Matt
// Tail - Pavel
// O(1) operation to get head and tail
// Matt -- Joy -- Samir -- Pavel

// Arrays
// Linked List - Use this because we don't want to constantly "resave" arrays if we take data from the front of an array

/*
What is a Program

- Allocate Memory
- Parse and Execute

Javascript Engine
- Memory Heap - Memory allocation happens
- Call Stack - Code is read and executed


*/

const a = 1;
const b = 10;
const c = 100;
// When we assign this, JavaScript engine will remember that a has a value of 1
// Memory Leak
// With these global variables, we have a limited amount of variables that can be declared
// Memory leaks happen when we have unused memory laying around filling up the memory heap
// That's why we say global variables are bad

// Call Stack
console.log('1');
console.log('2');
console.log('3');
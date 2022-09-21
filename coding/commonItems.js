/*
Given 2 arrays, create a function that lets a user know (true/false) whether
two arrays have any common items.
*/

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
// => false

const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];
// => true

// 2 paramaters - always going to be an array
// returns true or false, a boolean

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCommonItem(array1, array2));
console.log(containsCommonItem(array3, array4));
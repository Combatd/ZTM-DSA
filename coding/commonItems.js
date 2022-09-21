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

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// array1 is going to be converted into an object keys
// {}
// a: true,
// b: true,
// c: true,
// x: true
// }
// array2[index] === obj.properties

// Time: O(a + b)
// Space: O(n) - creating a new hash map and adding n elements from arr1
function containsCommonItem(arr1, arr2) {
  // loop through arr1 and create object where properties === items in the array - O(a)
  // can we assume 2 parameters in the function?
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through arr2 and check if item in arr2 exists on object - O(b)
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonItem(array1, array2));
console.log(containsCommonItem(array3, array4));

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

console.log(containsCommonItem3(array1, array2));
console.log(containsCommonItem3(array3, array4));
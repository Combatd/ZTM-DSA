const letters = ['a', 'd', 'z', 'e', 'r', 'b'];

letters.sort(); // this worked well for such a small input

// Don't trust that your built in method sorts data correctly.

const basket = [2, 65, 34, 2, 1, 7, 8];
basket.sort()
console.log(basket); // 1, 2, 2, 34, 65, 7, 8

// In JavaScript, it converts the numbers to string, getting str.charCodeAt() to get unicode value
// Read the documentation for Array.prototype.sort()
// Time and Space Complexity not guaranteed as it is implementation dependent

console.log('2'.charCodeAt(0))
console.log('65'.charCodeAt(0))
console.log('34'.charCodeAt(0))
console.log('7'.charCodeAt(0))

const spanish = ['unico', 'arbol', 'cosas', 'futbol'];
spanish.sort((a, b) => {
  return a.localeCompare(b);
})

console.log(spanish);
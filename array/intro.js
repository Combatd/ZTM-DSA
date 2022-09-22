const strings = ['a', 'b', 'c', 'd'];
// 4 items
// 4 * 4 = 16 bytes of RAM per 1 letter string

// strings[2]; // access 3rd element of the strings array => 'c'

// push
strings.push('e'); // Time: O(1)
console.log(strings);

// pop
strings.pop(); // Time: O(1)
console.log(strings);

// unshift
strings.unshift('x'); // Time: O(n)
console.log(strings);

// splice
strings.splice(2, 0, 'alien'); // Time: O(n)
console.log(strings);

// C++
// int a[20];
// int b[5] {1, 2, 3, 4, 5}
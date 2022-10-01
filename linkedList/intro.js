const basket = [
  'apples',
  'grapes',
  'pears'
];

// Apples -> Grapes -> Pears -> (and nothing after)
// 8947 -> 8742 -> 372 -> null

const obj1 = {
  a: true
};

let obj2 = obj1; // pointer/reference to obj1 - not copying the object, pointing to the same memeory location
obj1.a = 'booya';
delete obj1
obj2 = 'hello';
// console.log(obj1, ' 1');
console.log(obj2, ' 2');
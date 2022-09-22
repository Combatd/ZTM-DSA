/*
Create a function that reverses a string:
'Hi My name is Andrei'
'ierdnA si eman yM Hi
*/

function reverse(str) {
  // Check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return undefined;
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const reverse3 = (str) => [...str].reverse().join('');

console.log(reverse('Hi My name is Andrei'));
console.log(reverse2('Hi My name is Andrei'));
console.log(reverse3('Hi My name is Andrei'));
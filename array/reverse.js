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

console.log(reverse('Hi My name is Andrei'));
function reverse(str) {
  // check our input
  if (!str || str.length < 2 || typeof str != 'string') {
    return false;
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  
  return backwards.join('');
}

console.log(reverse('hi there this is the reversed string'));
console.log(reverse('abcdefg'));
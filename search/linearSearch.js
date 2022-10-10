function linearSearch(array, searchValue) {
  let index = 0;
  while(index < array.length) {
    if (array[index] === searchValue) {
      return index;
    }
    index++;
  }
  return false;
}
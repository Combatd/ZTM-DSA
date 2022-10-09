function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      //  Move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      //  Find where nuber should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          //  Move number to correct spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

const numbers = [99, 44, 66, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(numbers);
console.log(numbers);
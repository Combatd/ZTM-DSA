function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}
// Time: O(n^2)
// Space: O(1)

const numbers = [99, 44, 66, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(numbers);
console.log(numbers);
const boxes = [1, 2, 3, 4, 5];
const letters = ['a', 'b', 'c', 'd', 'e'];

// Time: O(n^2)
// Space: O(1)
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]); // O(n) * O(n)
    }
  }
}

logAllPairsOfArray(boxes);
logAllPairsOfArray(letters);
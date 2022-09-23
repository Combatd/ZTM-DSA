/*
  Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
  it should return 2

  Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
  It should return 1

  Given an array = [2, 3, 4, 5]
  It should return undefined
*/

function firstRecurringCharacter(array) {
  const visitedNumbers = {};

  for (let i = 0; i < array.length; i++) {
    if (visitedNumbers[array[i]]) {
      return array[i];
    } else {
      visitedNumbers[array[i]] = true;
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
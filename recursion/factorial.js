function findFactorialRecursive(number) {
  if (number === 1) {
    return number;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  let multiplier = 1;
  while (multiplier <= number) {
    answer = answer * multiplier;
    multiplier += 1
  }
  return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
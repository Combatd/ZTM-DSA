// Time O(2^n)
// Space: O(1)
function fibonacci(n) {
  if (n < 2) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Time: O(n)
// Space O(n)
function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}

const fasterFib = fibonacciMaster();
console.log('fib time!', fasterFib(50));
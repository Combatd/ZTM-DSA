function addTo80(n) {
  console.log('long time');
  return n + 80;
}

addTo80(5);
addTo80(5);
addTo80(5);

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) { // if cache[n]
    return cache[n];
  } else {
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log(memoizedAddTo80(5)); // we cache the property 5 to have 85 { 5 : 85 }
console.log(memoizedAddTo80(5)); 
console.log(memoizedAddTo80(6)); // hey, this wasn't cached yet!
// simple property access is O(1) time

/*
Memoization is a specific form of caching that involves caching a return value based on parameters
If the argument did not change, then it can return the cached memoized result
*/
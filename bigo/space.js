// Time: O(n)
// Space: O(1) - no additional data structures were created outside of the argument
function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("Boooo!");
  }
}

boo([1,2,3,4,5]);

// Time: O(n) We loop through argument n
// Space: O(n) We initialize a new array and push up to n number of elements
function arrayOfHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6);
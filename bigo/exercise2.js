/*
  Time: 4 + 3n + 2n = O(n) - we have 2 for loops, but they are both separate as 3n and 2n which simplify to n + n then 2n then n
  Space: O(1) No new memory is allocated other than a few variable assignments
*/

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  // O(n) for anything in the loop
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3 // O(n)
  }
  // O(n) for anything in the loop
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
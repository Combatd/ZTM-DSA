/*
    Time: O(n) - besides variable declarations, the invocation, variable assignment, and increment will have to each run for the number of elements in input
    Space: O(1) - Other than a few new variables, we don't take any more memory than what is already used by input argument
*/


function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    // It will run one time for every element in input, so O(n)
    for (let i = 0; i < input.length; i++) {
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

function anotherFunction() {
    console.log('anotherFunction called');
}

console.log(funChallenge(['burger', 'pizza']));
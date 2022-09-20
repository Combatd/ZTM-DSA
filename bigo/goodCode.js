const nemo = ['nemo'];

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('found nemo!');
        }
    }
}

findNemo(nemo);

/*
Runtime - how long does it take the computer to complete the task
Time: O(n) for n elements
Space: O(1) since no new data structures are created, looping over the array in place
*/
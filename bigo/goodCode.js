const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
const large = new Array(1000).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('found nemo!');
        }
    }
    let t1 = performance.now();
    console.log('Call to findNemo took ' + (t1 - t0) + ' milliseconds')
}

// findNemo(nemo);
// findNemo(everyone, ' <- for everyone');
findNemo(large);

/*
Runtime - how long does it take the computer to complete the task
Time: O(n) for n elements
Space: O(1) since no new data structures are created, looping over the array in place
*/
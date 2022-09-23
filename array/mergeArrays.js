function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            mergedArray.push(arr1[i]);
            i += 1;
        } else {
            mergedArray.push(arr2[j]);
            j += 1;
        }
    }
    while(i < arr1.length) {
        mergedArray.push(arr1[i]);
        i += 1;
    }
    while(j < arr2.length) {
        mergedArray.push(arr2[j]);
        j += 1;
    }
    return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
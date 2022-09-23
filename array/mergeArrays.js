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

function mergeSortedArrs(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0]
  let array2Item = array2[0]
  let i = 1;
  let j = 1;

  // Check input
  if (array1.length < 1 && array2.length < 1) {
    return [];
  } else if (array2.length < 1) {
    return array1
  } else if (array1.length < 1) {
    return array2
  }

  while (array1Item || array2Item) {
    
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrs([0, 3, 4, 31], [4, 6, 30]));
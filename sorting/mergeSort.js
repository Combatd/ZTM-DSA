function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Split array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2); // Get a middle node to divide it into two parts
  const left = array.slice(0, middle); // copy the left side
  const right = array.slice(middle); // copy the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(numbers));
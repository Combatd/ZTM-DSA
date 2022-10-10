function binarySearch(numbers, searchValue, start = 0, end = numbers.length - 1) {
      if (start > end) return -1; 
  
      let index = Math.floor(start + end / 2)

      if (searchValue === numbers[index]){
          return index;
      }

      if (searchValue > numbers[index]) {
          // do binary search of upper half of array
          return binarySearch(numbers, searchValue, index, end);
          
      }
  
      if (searchValue < numbers[index]) {
          // do binary search of lower half of array
           return binarySearch(numbers, searchValue, start, index + 1);
      }
  
      return -1 // element was not found
  }
  
  console.log(binarySearch([1,2,3,4,5], 5)); // 4
  console.log(binarySearch([1,2,3,4,5], 15)); // -1
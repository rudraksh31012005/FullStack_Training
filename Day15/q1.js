function removeDuplicates(arr) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    let j = 0;
    let isDuplicate = false;

    while (j < result.length) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
      j++;
    }

    if (!isDuplicate) {
      result[result.length] = arr[i]; 
    }

    i++;
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));



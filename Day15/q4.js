function findCommonElements(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        let alreadyAdded = false;
        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr1[i]) {
            alreadyAdded = true;
            break;
          }
        }
        if (!alreadyAdded) {
          result[result.length] = arr1[i]; 
        }
      }
    }
  }

  return result;
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));


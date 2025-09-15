function union(arr1, arr2) {
  let result = [];

  function addUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      let exists = false;
      for (let j = 0; j < result.length; j++) {
        if (result[j] === arr[i]) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        result[result.length] = arr[i]; 
      }
    }
  }

  addUnique(arr1);
  addUnique(arr2);

  return result;
}
console.log(union([1, 2, 3], [3, 4, 5]));


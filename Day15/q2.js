function flattenArray(arr) {
  let result = [];

  function helper(subArr) {
    for (let i = 0; i < subArr.length; i++) {
      if (Array.isArray(subArr[i])) {
        helper(subArr[i]); // recursive call
      } else {
        result[result.length] = subArr[i]; // push manually
      }
    }
  }

  helper(arr);
  return result;
}

// Example
console.log(flattenArray([1, [2, [3,5,[6,7,8,9], [4, [5]]]], 6]));
// Output: [1, 2, 3, 4, 5, 6]

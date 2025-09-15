let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let result = [];

let i = 0, j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    result[result.length] = arr1[i]; 
    i++;
  } else {
    result[result.length] = arr2[j];
    j++;
  }
}

while (i < arr1.length) {
  result[result.length] = arr1[i];
  i++;
}

while (j < arr2.length) {
  result[result.length] = arr2[j];
  j++;
}

console.log(result);


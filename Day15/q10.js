function secondLargest(arr) {
  arr.sort((a, b) => b - a);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) return arr[i];
  }
  return null;
}

console.log(secondLargest([10, 20, 4, 45, 99]));
console.log(secondLargest([4, 5, 5]));

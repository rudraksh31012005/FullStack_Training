let arr = [10, 20, 25, 30, 40, 50];
function binarySearch(arr, k) {
  let s = 0, e = arr.length - 1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (arr[mid] === k) {
      return mid;  
    } 
    else if (arr[mid] < k) {
      s = mid + 1;
    } 
    else {
      e = mid - 1;
    }
  }

  return -1;
}
console.log(binarySearch(arr, 25)); 

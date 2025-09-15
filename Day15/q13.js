function longestCommonPrefix(arr) {
  if (arr.length === 0) return "";

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let j = 0;
    while (j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j]) {
      j++;
    }
    prefix = prefix.slice(0, j);
    if (prefix === "") return "";
  }

  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dog", "racecar", "car"])); 

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {};

  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    if (!count[ch]) return false;
    count[ch]--;
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world")); 

function longestUniqueSubstring(s) {
  let seen = {};
  let start = 0, maxLen = 0, startIndex = 0;

  for (let end = 0; end < s.length; end++) {
    let ch = s[end];

    if (seen[ch] >= start) {
      start = seen[ch] + 1;
    }

    seen[ch] = end;

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      startIndex = start;
    }
  }

  return s.slice(startIndex, startIndex + maxLen); 
}

console.log(longestUniqueSubstring("abcabcbb")); 
console.log(longestUniqueSubstring("bbbbb"));    
console.log(longestUniqueSubstring("pwwkew"));   

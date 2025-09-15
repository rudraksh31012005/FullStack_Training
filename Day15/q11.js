function getPermutations(str) {
  if (str.length === 1) return [str];

  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    let perms = getPermutations(remaining);
    for (let j = 0; j < perms.length; j++) {
      result[result.length] = char + perms[j];
    }
  }
  return result;
}

console.log(getPermutations("abc"));

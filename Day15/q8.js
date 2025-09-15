function isSubset(sub, main) {
  for (let i = 0; i < sub.length; i++) {
    let found = false;
    for (let j = 0; j < main.length; j++) {
      if (sub[i] === main[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      return false;
    }
  }
  return true;
}

console.log(isSubset([1, 2], [1, 2, 3, 4]));
console.log(isSubset([2, 5], [1, 2, 3, 4]));

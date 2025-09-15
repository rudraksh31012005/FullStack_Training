function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === 'a' || ch === 'A' ||ch === 'e' || ch === 'E' ||ch === 'i' || ch === 'I' ||ch === 'o' || ch === 'O' ||ch === 'u' || ch === 'U')
    {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Rudraksh Chittora")); 
function fibonacci(n) {
  let sequence = [];

  if (n >= 1) sequence[0] = 0;
  if (n >= 2) sequence[1] = 1;

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

console.log(fibonacci(7)); 

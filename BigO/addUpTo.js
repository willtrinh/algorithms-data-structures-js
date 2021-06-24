// O(n) time complexity
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(1) time complexity
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

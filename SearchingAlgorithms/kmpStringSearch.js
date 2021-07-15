/* Knuth-Morris-Pratt algorithm to be implemented */

// n = len(search)
// m = len(pattern)
// time: O(m + n)
// space: O(m)
function kmpStringSearch(search, pattern) {
  // build table: O(m) time and space
  // iterate through the pattern string
  // to find the largest matching prefix and suffix
  let i = 0;
  let j = 1;
  let table = [];
  // table[i] = where to start matching in pattern string
  // after a mismatch at i+1
  // each of the boxes in the table array is the length of
  // the longest suffix that is also a prefix of the string
  // from index 0 to index i (inclusive)
  if (pattern[i] !== pattern[j]) {
    table[i] = 0;
    table[j] = 0;
  } else {
    table[i] = 0;
    table[j] = 1;
  }
  while (j < pattern.length - 1) {
    if (pattern[i] !== pattern[j]) {
      table[++j] = 0;
    } else {
      table[j] = i + 1;
      i++;
    }
  }
  console.log(table);
  // matching traversal: O(n) time O(1) space
  for (let i = 0; i < search.length; i++) {}
}

console.log(kmpStringSearch("abcdsgxwadsgzdsgwadsgz", "dsgwadsgz")); // wtf

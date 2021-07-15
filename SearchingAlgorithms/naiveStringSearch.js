/*
 * Suppose you want to count the number of times a smaller
 * string appears in a longer string
 * A straightforward approach involes checking pairs of
 * characters individually
 */

/*
 * Pseudocode:
 * implement a function that takes in 2 strings called stringSearch
 * loop over the longer string
 * loop over the shorter string
 * If characters don't match, break out of the inner loop
 * If the characters do match, keep going
 * If you complete the inner loop and find a match,
 * increment the count of matches.
 * Return the count
 */

function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // compare long[i + j] to short[j] because
      // we want to 'look ahead' of long string since
      // i is stuck at a position while j increments
      if (long[i + j] !== short[j]) break;
      // if it makes it to the end of the short string
      // without breaking out of the loop then it is a match
      // increment count
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveStringSearch("omgzdfgfdgomg", "omg")); // 2
console.log(naiveStringSearch("lorie loled", "lol")); // 1

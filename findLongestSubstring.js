/* 
  Write a function called findLongestSubstring,
  which accepts a string and returns the length of
  the longest substring with all distinct characters
  Time complexity - O(n)
*/

// sliding window pattern
function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let start = 0,
    longest = 0;
  let seen = {}; //  keep track of unique characters in the string
  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    if (seen[character]) {
      start = Math.max(start, seen[character]);
    }
    // update longest
    longest = Math.max(longest, i - start + 1);
    // store index of the next character so we don't double count
    seen[character] = i + 1;
  }
  return longest;
}

// test cases
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6

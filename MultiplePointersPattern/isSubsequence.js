/* 
  Write a function called isSubsequence which takes
  in two strings and checks whether the characters
  in the first string form a subsequence of the characters
  in the second string. In other words, the function should
  check whether the characters in the first string appear
  somewhere in the second string, without their order changing.

  Your solution MUST have AT LEAST the following complexities:
  Time - O(N + M)
  Space - O(1)
*/

// multiple pointers pattern
function isSubsequence(string1, string2) {
  let i = 0;
  let j = 0;
  // an empty string is subsequence of another string
  if (!string1) return true;
  while (j < string2.length) {
    if (string1[i] === string2[j]) {
      i++;
    }
    if (i === string1.length) {
      return true;
    }
    j++;
  }
  return false;
}

// sample test cases
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("", "acb")); // true

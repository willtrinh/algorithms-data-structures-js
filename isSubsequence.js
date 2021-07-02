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
  let index = 0;
  // string1.length <= string2.length;
  for (let i = 0; i < string2.length; i++) {
    // when index is at the end of string1 and
    // last element of string1 equals current elem in string2
    // then we found the subsequence
    if (index === string1.length - 1 && string1[index] === string2[i]) {
      return true;
    } else if (string1[index] === string2[i]) {
      index++;
    }
  }
  return false;
}

// sample test cases
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

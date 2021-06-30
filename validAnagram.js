/* Given 2 strings, write a function to determine if
 * the second string is an anagram of the first.
 * An anagram is a word, phase, or name formed by rearranging the
 * letters or another, such as cinema, formed from iceman.
 */

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  const freqCounter = {};
  // loop through string1 and store all letters in string1 into freqCounter as key
  // and their responding values as frequencies
  for (const letter of string1) {
    freqCounter[letter] = freqCounter[letter] + 1 || 1;
  }
  // loop through string2
  for (const letter of string2) {
    // if letter in string2 doesn't exist in freqCounter (also means it's not in string1)
    // or the letter is zero then it's not an anagram
    if (!freqCounter[letter]) {
      return false;
    }
    // decrement frequency of the letter by 1 when found
    freqCounter[letter] -= 1;
  }
  return true;
}

// test cases
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

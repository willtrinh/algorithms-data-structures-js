/* Given 2 strings, write a function to determine if
 * the second string is an anagram of the first.
 * An anagram is a word, phase, or name formed by rearranging the
 * letters or another, such as cinema, formed from iceman.
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freqCounter = {};
  for (const letter of str1) {
    freqCounter[letter] = freqCounter[letter] + 1 || 1;
  }
  for (const letter of str2) {
    if (!freqCounter[letter]) {
      return false;
    }
    freqCounter[letter] = freqCounter[letter] - 1;
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

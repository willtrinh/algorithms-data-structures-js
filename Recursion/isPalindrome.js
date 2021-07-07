/* 
  Write a recursive function called isPalindrome which returns
  true if the string passed to it is a palindrome (reads the
  same forward and backward). Otherwise it return false.
*/

function isPalindrome(str) {
  // 1 character string is a palindrome
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  // check first and last character of str
  // slice off first and last until base cases matched
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  // else return false
  return false;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

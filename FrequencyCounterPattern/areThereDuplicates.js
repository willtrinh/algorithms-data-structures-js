/* 
  Implement a function called areThereDuplicates
  which accepts a variable number of arguments, and
  checks whether there are any duplicates among the 
  arguments passed in. You can solve this using the 
  frequency counter pattern OR multiple pointers pattern.
*/

// time - O(n)
// space - O(n)
// frequency counter pattern
function areThereDuplicates() {
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
    if (obj[arguments[i]]) {
      return true;
    }
    obj[arguments[i]] = 1;
  }
  return false;
}

// sample outputs
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

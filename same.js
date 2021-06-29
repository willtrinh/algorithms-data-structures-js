// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has its corresponding value squared in the second array
// The frequency of values must be the same

// naive solution (nested loop)
function sameNaive(arr1, arr2) {
  // check if both arrays are of same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop over first array
  for (let i = 0; i < arr1.length; i++) {
    // check if there is a squared
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    // remove the index from the second array
    arr2.splice(index, 1);
  }
  return true;
}

function same(arr1, arr2) {
  // check if both arrays are of same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj = {}; // store frequency of values in array1
  // iterate through array1 and store values and its frequency
  // as key:value pairs
  for (const value of arr1) {
    obj[value] = obj[value] + 1 || 1;
  }
  // iterate through array2 and squared every value in array1
  // to see if it's the same
  for (const value of arr2) {
    console.log(value);
    console.log(obj[value]);
    if (obj[Math.sqrt(value)] === Math.sqrt(value)) {
      obj[Math.sqrt(value)] -= 1;
      arr2.splice(value, 1);
    }
  }
}

console.log(sameNaive([1, 2, 3], [4, 1, 9])); // true
console.log(sameNaive([1, 2, 3], [1, 9])); // false
console.log(sameNaive([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

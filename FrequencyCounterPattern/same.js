// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has its corresponding value squared in the second array
// The frequency of values must be the same

// naive solution (nested loop) O(n^2) time complexity
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

// O(n) time complexity
function same(arr1, arr2) {
  // check if both arrays are of same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {}; // store frequency of values in array1
  let freqCounter2 = {}; // store frequency of values in array2
  for (const value of arr1) {
    freqCounter1[value] = freqCounter1[value] + 1 || 1;
  }
  for (const value of arr2) {
    freqCounter2[value] = freqCounter2[value] + 1 || 1;
  }
  // loop through frequency counter of array1
  for (let key in freqCounter1) {
    // check if there exist a squared key in freqCounter2
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    // check if the values (frequencies of key) is the same
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(sameNaive([1, 2, 3], [4, 1, 9])); // true
// console.log(sameNaive([1, 2, 3], [1, 9])); // false
// console.log(sameNaive([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
console.log(same([1, 2, 2, 1], [4, 4, 1, 1])); // true (must be same frequency)

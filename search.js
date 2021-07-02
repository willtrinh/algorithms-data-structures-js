/*
 * Given a sorted array of integers, write a function
 * called search, that accepts a value and returns the
 * index where the value passed to the function is
 * located. If value is not found, return -1
 *
 */

// naive solution, linear search, O(n) time
// function search(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return i;
//   }
//   return -1;
// }

// optimized solution, binary search, O(logn) time

function search(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === value) {
      return mid;
      // if value < mid elem then search left side
    } else if (value < arr[mid]) {
      right = mid - 1;
      // else search right side
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

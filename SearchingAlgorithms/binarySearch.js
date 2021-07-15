/*
 * Binary search is much faster form of search
 * Rather than eliminating one element at a time,
 * you can eliminate half of the remaining elments at a time.
 * Binary search only works on sorted arrays.
 */

/*
 * This function accepts a sorted array and a value.
 * Create a left pointer at the start of the array, and a right
 * pointer at the end of the array
 * while the left pointer comes before the right pointer:
 * Create a pointer in the middle.
 * If you find the value, return the index
 * If value is too small, move the left pointer up
 * Else move right pointer down
 * If value not found, return -1
 */

// time: O(logn) worst and average case
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) return mid;
    // target value is on the right side of the array
    else if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // if val is not found
  return -1;
}
// recursive approach
// function binarySearch(arr, val, left = 0, right = arr.length - 1) {
//   // base condition
//   if (left > right) return -1;
//   let mid = Math.floor((left + right) / 2);
//   if (arr[mid] === val) return mid;
//   else if (arr[mid] > val) {
//     return binarySearch(arr, val, left, mid - 1);
//   } else {
//     return binarySearch(arr, val, mid + 1, right);
//   }
// }

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 3, 5, 7, 11], 7)); // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 100)); // -1

/*
 * Write a function called maxSubarraySum which accepts
 * an array of integers and a number called n.
 * The function should calculate the maximum sum of n
 * consecutive elements in the array.
 */

// naive solution, 2 nested loops O(n^2) time
// function maxSubarraySum(arr, n) {
//   if (n > arr.length) {
//     return null;
//   }
//   let maxSum = -Infinity;
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//     }
//     maxSum = Math.max(maxSum, temp);
//   }
//   return maxSum;
// }

// optimized solution, O(n) time complexity
// sliding window pattern
// only going through the input array once

function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (n > arr.length) return null;

  // sum together the first n digits in the array
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum; // keep track of current sum
  // loop through the rest of the array
  for (let i = n; i < arr.length; i++) {
    // move the sliding window up
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// test cases
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

/*
 * Write a function called maxSubarraySum which accepts
 * an array of integers and a number called n.
 * The function should calculate the maximum sum of n
 * consecutive elements in the array.
 */

// naive solution, 2 nested loops
function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
}

// test cases
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null

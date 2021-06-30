/* Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero
 * or undefined if a pair does not exist.
 */

// naive solution, nested loops
function sumZeroNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// optimized solution, O(n) time complexity
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  // since the array is sorted, if first value is positive
  // then no need to loop through the rest of the array
  if (arr[left] > 0) return undefined;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
      // if sum is less than 0, move left pointer forward
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

// test cases
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined

console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZeroNaive([-2, 0, 1, 3])); // undefined
console.log(sumZeroNaive([1, 2, 3])); // undefined

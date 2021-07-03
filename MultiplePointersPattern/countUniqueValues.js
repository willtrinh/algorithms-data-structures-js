/*
 * Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts
 * the unique values in the array. There can be negative
 * numbers in the array, but it will always be sorted.
 */

// create two pointers left and right
// loop through array, continue moving right pointer forward
// if right pointer value equals left pointer value
// if different value, then move left forward and overwrite
// left pointer value to right pointer value since they are unique

// tc: O(n)
// sc: O(1)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
    }
  }
  // left index + 1 will be the total numbers of unique values
  return left + 1;
}

// test cases
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

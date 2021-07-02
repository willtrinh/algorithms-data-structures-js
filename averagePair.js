/* 
  Write a function called averagePair.
  Given a sorted array of integers and a target average,
  determine if there is a pair of values in the array
  where the average of the pair equals the target average.
  There may be more than one pair that matches the average target.
  Constraints: O(n) time, O(1) space
*/

// two pointers pattern
function averagePair(arr, target) {
  if (arr.length === 0) return false;
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let averagePair = (arr[right] + arr[left]) / 2;
    if (averagePair === target) {
      return true;
      // move left pointer forward if averagePair < target
    } else if (averagePair < target) {
      left++;
      // else move right pointer backward
    } else {
      right--;
    }
  }
  return false;
}

// Sample test cases
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

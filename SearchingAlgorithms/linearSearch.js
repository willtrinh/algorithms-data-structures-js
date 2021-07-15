/*
 * this function accepts an array and a value
 * loop through the array and check if the current array element
 * is equal to the value. If it is, return the index at which
 * the element is found. If the value is never found, return -1.
 */

// time: O(n)
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

// test cases
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1

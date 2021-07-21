/*
 * Buils up the sort by gradually creating a larger left half which is
 * always sorted.
 */

/* Pseudocode:
 * Start by picking the second element in the array
 * Now compare the second element with the one before it and swap if necessary
 * Continue to the next element and if it is in the incorrect order,
 * iterate through the sorted portion (i.e. left side) to place the element
 * in the correct place.
 * Repeat until the array is sorted.
 */

// O(n^2) time complexity
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]; // the first element in unsorted subarray
    let j = i - 1; // the last element in sorted subarray
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([32, 22, 10, 19, 17]));

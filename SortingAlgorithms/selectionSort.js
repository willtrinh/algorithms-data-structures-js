/*
 * Similar to bubble sort, but instead of first placing large values into
 * sorted position, it places small values into sorted position.
 */

/*
 * Pseudocode:
 * Create a function called selectionSort.
 * Make a variable to store the index of smallest value in the array so far.
 * Compare this item to the next item in the array until you find a smaller number.
 * If the smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array.
 * If the minimum is not the value (index) you initially began with, swap the two values.
 * Repeat this with the next element until the array is sorted.
 * Return the sorted array.
 */

// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        minVal = j;
      }
    }
    // swap
    if (i !== minVal) {
      [arr[i], arr[minVal]] = [arr[minVal], arr[i]]; // es6
      // let temp = arr[i];
      // arr[i] = arr[minVal];
      // arr[minVal] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([32, 22, 10, 19, 17]));

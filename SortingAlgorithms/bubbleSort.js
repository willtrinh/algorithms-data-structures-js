/*
 * Compare two values and if left elem > right elem then swap
 * the largest values "bubble up" toward the end of the array
 * A sorting algorithm where the largest values bubble up to the top
 */

/*
 * Pseudocode:
 * Create a function called bubbleSort.
 * Start looping with a variable called i at the end of the array towards the beginning.
 * Start an inner loops with a variable called j from the beginning until i - 1
 * If arr[j] is greater than arr[j+1], swap those two values!
 * Return the sorted array
 */
// naive solution O(n^2) tc
// This will still make uneccessary comparisons with sorted elements
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// optimized solution, still O(n^2) tc worst case
function bubbleSort(arr) {
  let noSwaps; // account for nearly sorted arrays
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    // if elements are not swapped break out of the loop
    // this will shorten the number of comparisons that have to made
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])); // nearly sorted array
console.log(bubbleSort([37, 45, 29, 8, 12, 78, -3]));

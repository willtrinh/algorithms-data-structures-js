/* 
Combination of 2 things: merging and sorting
exploits the fact that arrays of 0 or 1 element are always sorted
works by decomposing an array into smaller subarrays of 0 or 1 elements,
then building up a newly sorted array.
In order to implement merge sort, it's useful to first implement
a function responsible for merging two sorted arrays.
Given two arrays which are sorted, this helper function should create
a new array which is also sorted, and consists of all of the elements
in the two input arrays. This function should run in O(n + m) time and
O(n + m) space and should not modify the parameters passed into it.
 */

/******** Pseudocode (for merging two sorted arrays) ********
Create an empty array, take a look at the smallest values in each
input array (while loop, i and j)
While there are still values we haven't looked at...
  - if the value in the first array is smaller than the value in second
  array, push the value in the first array into our results and move
  on to the next value in the first array.
  - if the value in the first array is larger than the value in the 
  second array, push the value in the second array into our results
  and move on to the next value in the second array.
  Once we exhaust one array, push in all remaining values from the
  other array. 
*/

/******** mergeSort Pseudocode ********
- Break up the array into halves until you have arrays that are empty
or have one element
- Once you have smaller sorted arrays, merge those arrays with other
sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged
and sorted array
 */

// O(nlogn) time complexity
// O(logn) decompositions and O(n) comparisons per decomposition
// O(n) space complexity (use additional arrays to store subarrays)
function mergeSort(arr) {
  // base case when arr has 0 or 1 element
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

// helper function to merge two sorted arrays
function merge(arr1, arr2) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  // push the remaining values from the longer array into result array
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1,2,10,14,50,99,100]
// console.log(merge([], [1, 3])); // [1,3]

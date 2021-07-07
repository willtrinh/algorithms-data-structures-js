/* 
  Write a recursive function called flatten which accepts an 
  array of arrays and returns a new array with all values flattens.
*/

function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // check if current element is an array
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3

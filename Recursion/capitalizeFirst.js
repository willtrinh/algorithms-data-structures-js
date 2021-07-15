/* 
  Write a recursive function called capitalizeFirst. Given
  an array of strings, capitalize the first letter of each
  string in the array.
*/

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    // capitalize first letter and add the rest of the string
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }
  const res = capitalizeFirst(arr.slice(0, -1));
  const str =
    arr.slice(arr.length - 1)[0][0].toUpperCase() +
    arr.slice(arr.length - 1)[0].substr(1);
  res.push(str);
  return res;
}

// iterative approach
// function capitalizeFirst(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
//   }
//   return arr;
// }

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

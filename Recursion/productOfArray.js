/* 
  Write a function called productOfArray which takes in an array
  of numbers and returns the product of them all
*/

// inner function recursion
// function productOfArray(arr) {
//   let product = 1;
//   function findProduct(arr) {
//     if (arr.length === 0) return;
//     product *= arr[0];
//     findProduct(arr.slice(1));
//   }
//   findProduct(arr);
//   return product;
// }

// pure recursion
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

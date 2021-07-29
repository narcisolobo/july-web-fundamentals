// var arr2d = [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ];

// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);

// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

// Note - Don't assume the array will always be the same size, we must rely on its .length property

// Hint - Can we put a for loop inside another for loop?

// PSEUDOCODE!!

function isPresent2d(arr2d, value) {
  // your code here
}

var arr2d = [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ];
isPresent2d(arr2d, 6) // -> should return true
isPresent2d(arr2d, 4) // -> should return false

// Flatten Array
// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

// complete the following function
function flatten(arr2d) {
  var flat = [];
  // your code here
  return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
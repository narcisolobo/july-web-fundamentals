var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;
fruit1 = fruit2;

console.log(fruit2 + " and " + fruit1);
// output -> apples and apples

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// WHILE LOOPS
// 1. Sentry (usually "i")
// 2. Where does it start? (var i = 0)
// 3. Where does it end? (i < arr.length)
// 4. How does it change? (i++)

var start = 0;
var end = 12;

while (start < end) {
  console.log("start: " + start + ", end: " + end);
  start += 2;
  end -= 2;
}

// MAKE YOUR GAME PLAN!!! PSEUDO CODE LIKE A HUMAN!!

// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

["a", "b", "c", "d", "e"];
// we expect to get back...

["e", "d", "c", "b", "a"];


function reverse(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
    console.log("loop no.:", i, arr);
  }
  return arr;
}

var reversedArr = reverse([1, 2, 3, 4, 5]);
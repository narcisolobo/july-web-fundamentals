// JavaScript Variables

// A JS variable is like a cardboard box with a label on it. You can put whatever you like in this box.

var firstName = "Narciso";
console.log(typeof firstName); // output: string

firstName = '';
console.log(typeof firstName); // output: string

// You cannot have spaces
// You cannon begin with a number
// You cannot use hyphens or dashes

// Primitive Datatypes
// 1. Strings - strings of characters
// 2. Numbers - no distinction between floating point and integer ie. 5 & 5.5 are both numbers
// 3. Booleans - can only hold one of two values: true or false

var myAge = 21;
var isSleeping = false;

// LOOPS
// Loops let us repeat blocks of code. For instance, what if we were tasked to print the integers from 1 to 10. You may try it this way at first:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// But there is a lot of repetition with this method. It it not "DRY" code.
// DRY - DON'T REPEAT YOURSELF!

// Loops to the rescue!

// For Loop requirements:
// 1. Sentry
// 2. Where it starts
// 3. Where it ends
// 4. How it changes

for(var i = 1; i <= 10; i++) {
  console.log(i) // output -> 1, 2, etc... 10
}

// Lesson 1 - Predict the output
var a = 25;
a = a - 13;
console.log(a/2); // output -> 6

a = "hello";
console.log(a + " hello"); // output -> hello hello

// Lesson 2 - Predict Loops
for(var i=0; i<10; i++) {
  console.log(i); // output -> 0, 4, 8
  i = i + 3;
}

console.log("outside of the loop " + i); // output -> outside of the loop 12

// Lesson 3 - Predict what the code does
function getTotal(arrayOfNumbers) {
  var sum = arrayOfNumbers[0];
  for(var i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i]; // sum = sum + arrayOfNumbers[i]
    console.log("the current sum is: " + sum); 
  }
  console.log("the total is: " + sum);
}

getTotal([1, 3, 5]); // output -> 10
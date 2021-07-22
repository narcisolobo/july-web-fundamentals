// Functions!
// Code that hangs out at the ready until it's called into duty.
// Functions define a series of steps that accomplish a task.

// Function declaration!

function helloWorldStatic() {
  console.log("Hello World!");
}

// Functions may or may not have parameters - ingredients that a function needs to accomplish its task.
function helloWorldDynamic(nameInput) {
  console.log("Hello " + nameInput + "!");
}

helloWorld("Ramses");

// Return statement
// What is it for even???

function addTwo(num1, num2) {
  var result = num1 + num2;
  console.log(result);
  return result;
}

var sum = addTwo(2, 2);
console.log(sum);

// 1. 
var x = 5;

function setX(newValue) {
  x = newValue;
}

console.log(x); // output -> 5
setX(15);
console.log(x); // output -> 15

// 2. 
var x = 5;

function addToX(amount) {
  return x + amount;
  console.log("hello there");
}

console.log(x); // output -> 5
var result = addToX(-10);
console.log(result); // output -> -5
console.log(x); // output -> 5

// 3.
function isPal(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
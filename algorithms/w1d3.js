// If statements

var isSunny = false;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

// Concatenation
// The adding of two strings together

if(isSunny) {
  whatToBring += "sunglasses, ";
} else {
  whatToBring += "normal glasses, "
}
if(temperature < 50) {
  whatToBring += "a coat, ";
}
if(isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);
// Predicted output: I should bring: sunglasses, a coat, and a smile!

// Loops don't always have to increment. They can decrement as well!!
for(var i = 10; i > 0; i--) {
  if(i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}

console.log("liftoff!");
// 10, 9, 8, 7, 6, 5, 4, 3, ignition, 1, liftoff!

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for(var i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    countPositives++
  }
}

console.log("there are " + countPositives + " positive values");

// Arrays
// What are they, even?

// Reference datatype
// Arrays can hold more than one value.
// The values in an array are indexed.
// The indexes always start at 0.

var faveColors = ["orange", "purple", "green"]
                //   0         1         2

// Bracket notation
// getting values:
console.log(faveColors[1])
// setting values:
faveColors[2] = "burnt sienna"
console.log(faveColors)

// Javascript arrays can hold any datatype!
var myArray = [1, "narciso", true, [1, 2, 3]]
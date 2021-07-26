// DOM
// Document Object Model

// What is a JavaScript object?
// Compare to objects in real life. - Objects in real life have characteristics and things they can do.

// IRL - characteristics, things it can do
// JS Objects - properties, methods

// Object Literal Notation
var myCar = {
  'color': "red",
  'numDoors': 2,
  'isNew': false,
  'features': ['satellite radio', 'usb-c'],
  'drive': function(){
    console.log("Driving...")
  },
  'printStats': function(){
    // Template Literal
    console.log(`Color: ${this.color}, number of doors: ${this.numDoors}, is this new: ${this.isNew}`)
  }
}

// // Dot notation
// myCar.color = "green" // set values
// console.log(myCar.color) // get values

// // Bracket notation
// myCar['numDoors'] = 4
// console.log(myCar['numDoors']) // get values

// myCar.drive()

// var myArr = [1, 2, 3, 4]
// myArr.push(5)
// console.log(myArr)
// console.log(myArr.length)

// myCar.printStats()

// alert("Link is good");

// console.dir(this)

var myTitle = document.querySelector('#myTitle')
console.log(myTitle) // prove we have saved it

// Manipulating the DOM
function changeMe() {
  title.innerHTML = 'I have changed.'
  title.style.backgroundColor = 'green'
}

// function myAlert() {
//   alert('This is coming from script.js')
// }

var loremPara = document.querySelector('#lorem')

function disappear(element){
  console.log('In the function...')
  element.remove()
}
// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
//
// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
//
// const isLonger= (fruit1, fruit2) => {
//   if (fruit1<fruit2) {
//     return fruit2
//   } else {
//     return fruit1
//   }
// }
// console.log(isLonger("fruit1","fruit2"))

// create a function called longerString
// set longerString equal to two values: stringOne and stringTwo
// set a conditional that staes is stringOne.length is greater than stringOne return stringOne and vice versa.
//console.log name of function and defined variables within.


const longerString = (stringOne, stringTwo) => {
	if (stringOne.length > stringTwo.length) {
return stringOne
} else {
return stringTwo
}
}
console.log(longerString(fruit1, fruit2))
console.log(longerString(fruit3, fruit4))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212
//
// const num= (temp1, temp2, temp3) => {
//   if (num===212) {
//     return 212 is at boiling point
//   } else if (num===350) {
//     return 350 is above boiling point
//   } else if (num===42) {
//     return 42 is below boiling point
//   }
//     else {
//       return invalid number
//     }
// }


// // Create a function called boiling point
// // Use the if/else to work through the different conditions
// // 212 is boiling point, 213 and up in above boiling and 211 and lower is below boiling point
// //log the function with the different variable given


 Const boilingPoint = (number) => {
if(number === 212) {
Return `$(number) is at boiling point`
} else if (number > 212 {
return `${number} is above boiling point`
} else {
Return `${number} is below boiling point`
}
}
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]
//
// console.log(myNumbers1.concat(myNumbers2))


// // create a function that combines two arrays
// // create a function that runs the combined arrays and outputs the length of the two combined

 var numbersCombined= myNumbers1.concat(myNumbers2))

 console.log(numbersCombined.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

const currentCohort = "Alpha 2022"

// Create variable cohortArray
// Set reverse cohortArray to the value of currentCohort while
//  applying the reverse method to turn reverse the string values in the array.

Var reverseCohortArray = currentCohort.reverse()
console.log(reverseCohortArray.join(“”))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

const myArray = [13, 34, 5, 10, 27, 42]

// Use a for loop to iterate through the array
//  Set up a conditional
//  Check index against % 2 to determine if odd or even
// set up if/else statement to output even or odd depending on number

for (let i=0; i < myArray.length; i ++) {
if (myArray[i] % 2===0) {
console.log(“even”)
} else {
console.log(“odd”)
}

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

console.log("number2-number1")

// Set two:
const number3 = 27
const number4 = 24

// //  Create a function called diff
// //  Diff will take in two numbers
// //  Use a conditional to determine which numbers is bigger
// //  Subtract the smaller number from the larger
// //  Return the result
//
Const diff= (num1, num2) => {
If (num1> num2)
Return num1-num2
} else {
Return num2-num1
}
}
console.log(diff(number1, number2))
console.log(diff(number3, number4))

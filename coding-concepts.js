// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))
//
// // a) Your answer: It will add indigo to the end of the string.
// // b) Verify and explain: Push is the method that adds one or more elements to the end of the array and returns it when ran as a function.
//
//
// // --------------------1) What will this log?
//
const cohort = "Alpha 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: It's 10 becaues the function is asking for the length of the indexes in the string and if you count all the values including the space it comes out to ten!


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It returns "o" because is the fourth value in the string.
// b) Verify and explain: The console.log funciton is asking for the 4th index place in the greeting declaration which is the letter "o" in "Hello World!"


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])
//
// // a) Your answer: Ruby
// // b) Verify and explain: This function is asking for the string at the first index which is "Ruby".
//
//
// // --------------------4) What will this log?
//
 const weekendDays = ["saturday", "sunday"]
 console.log(weekendDays.toUpperCase())
//
// // a) Your answer: It changes the casing in the values within the string to toUpperCase.
// // b) Verify and explain: I verified the function in the terminal and there was an error pointing the "to" in "toUpperCase" which was because the uppercase function doesn't work with arrays.
//
//
// // --------------------5) What will this log?
//
const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: The length of the data types in the string. Output should be 6,6 and 7.
// b) Verify and explain: The output was "number". I'm not sure why it only came out with number. It should've been the length of each value.

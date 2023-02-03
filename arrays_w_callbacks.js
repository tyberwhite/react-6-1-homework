// Day 27
// React 6.1 Homework
// J.T.W.

// DESCRIPTION: This combination lab/hw (start during lab time) is designed to be a review of array methods with callbacks i.e forEach, Map, Filter, Reduce, Find, Every etc

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

/*********** QUESTION #1 - every() **************/

//  1. Determine if every number is greater than or equal to 0
function isGreaterOrEqual(arr) {
  return arr.every((element) => {
    if (element < 0) {
      return false;
    }
    return true;
  });
}

console.log(isGreaterOrEqual(nums)); // true

// 2. Determine if every word shorter than 8 characters
function isShorter(arr) {
  return arr.every((element) => {
    if (element.length < 8) {
      return true;
    }
    return false;
  });
}

console.log(isShorter(panagram)); // true

/*********** QUESTION #2 - filter() **************/

//  1. Filter the array for numbers less than 4
const lessThanResult = nums.filter((element) => {
  return element < 4;
});

console.log(lessThanResult); // [ 1, 2, 3, 0 ]

//  2. Filter words that have an even length
const evenLength = panagram.filter((word) => {
  return word.length % 2 === 0;
});

console.log(evenLength); // [ 'over', 'lazy' ]

/*********** QUESTION #3 - find() **************/

//  1. Find the first value divisible by 5
const firstValue = nums.find((element) => element % 5 === 0);

console.log(firstValue); // 5

//  2. Find the first word that is longer than 5 characters
const longerWord = panagram.find((word) => word.length > 5);

console.log(longerWord); // undefined

/*********** QUESTION #4 - findIndex() **************/

//  1. Find the index of the first number that is divisible by 3
const numIndex = nums.findIndex((element) => element % 3 === 0);

console.log(numIndex); // 2

//  2. Find the index of the first word that is less than 2 characters long
const wordIndex = panagram.findIndex((word) => word.length < 2);

console.log(wordIndex); // -1

/*********** QUESTION #5 - forEach() **************/

//  1. Console.log each value of the nums array multiplied by 3
function logValues(arr) {
  arr.forEach((element) => {
    console.log(element * 3);
  });
}

logValues(nums); // see terminal result

//  2. Console.log each word with an exclamation point at the end of it
function logWithExclamation(arr) {
  arr.forEach((word) => {
    console.log(`${word}!`);
  });
}

logWithExclamation(panagram); // see terminal result

// THOUGHT QUESTIONS

// What happened to the original array?
//      Nothing. The forEach() does not modify the array that it is called on.
//      It performs an operation on each element of the array.

// Can you store the values from a forEach method in a new array?
//      Yes, you can.
//      Create a new array. Push the values generated from forEach into the new array.

/*********** QUESTION #6 - map() **************/

// Make a new array of each number multiplied by 100
const newNumsArray = nums.map((element) => element * 100);

console.log(newNumsArray); // see terminal result

// Make a new array of all the words in all uppercase
const newWordsArray = panagram.map((word) => word.toLocaleUpperCase());

console.log(newWordsArray); // see terminal result

// THOUGHT QUESTIONS

// What happened to the original array?
//      The original array remains unmodified. The map() function creates a new array

// Can you store the values from a map method in a new array?
//      Yes, you can. The map() method returns a new array with the modified elements by default.
//      You could also assign the result to a new variable

/*********** QUESTION #7 - some() **************/

// 1. Find out if some numbers are divisible by 7
const areDivisible = nums.some((element) => element % 7 === 0);

console.log(areDivisible); // true

// 2. Find out if some words have the letter a in them
const hasLetter = panagram.some((word) => word.includes("a"));

console.log(hasLetter); // true

/*********** Hungry For More - Optional ******************/

// Will complete this section, guaranteed! ;-)

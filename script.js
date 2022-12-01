//I. Variables & Datatypes

// A. Q + A
// 1. How do we assign a value to a variable?
// After declaring the variable with either var, let, or const you must use the assignment operator followed by a value.

// 2. How do we change the value of a variable?
// State the variable name followed by the assignment operator and a new value.

// 3. How do we assign an existing variable to a new variable?
// Declare a new variable followed by the assignment operator and the existing variables name.

// 4. Remind me, what are declare, assign, and define?
// To declare is to create a variable without a definition, assigning is to change the value of a variable to something new, while defining is to create a variable with a starting value. * 


// 5. What is pseudocoding and why should you do it?
// Pseudocoding is the process of working through the construction of a program in simple logical terms without using an actual programming or coding language which allows the coder to better plan their program. 


// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// On average about 50% given that more planning often correlates to less time redoing dysfunctional code.

//-----------------------------------------------------------------------------------------------------------------

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
let firstVariable;

// Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// Change the value of this variable to some number
firstVariable = 42;

// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// Change the value of secondVariable to any string.
secondVariable = "Hello Chase!";

// What is the value of firstVariable?
42

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

let yourName = "Orion";

console.log("Hello my name is " + yourName)

//-----------------------------------------------------------------------------------------------------------------

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

//-----------------------------------------------------------------------------------------------------------------

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit

let animal = 'cow';

if (animal == 'cow') {
    console.log('mooooo')
} else {
    console.log("Hey! You're not a cow.")
}
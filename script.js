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
// 1. Declare a variable animal. Set it to be either "cow" or something else
// 2. Write code that will print out "mooooo" if the it is equal to cow
// 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// 4. Commit

let animal = 'cow';

if (animal == 'cow') {
    console.log('mooooo')
} else {
    console.log("Hey! You're not a cow.")
}

//-----------------------------------------------------------------------------------------------------------------

// E. Driver's Ed
// 1. Make a variable that holds a person's age; be semantic
// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let personAge = 23;

if(personAge >= 16) {
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
}

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

// II. Loops
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i=0;i<11;i++) {
    console.log(i)
}
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
for (let i=10;i<401;i++) {
    console.log(i)
}

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i=12;i<4001;i+=3) {
    console.log(i)
}

//-----------------------------------------------------------------------------------------------------------------

// B. Get even
// 1. Print out the numbers that are within the range of 1 - 100
for (let i=1;i<101;i++) {
    console.log(i)
}

// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i=1;i<101;i++) {
    if (i%2 == 0) {
        console.log(i + "<-- is an even number")
    } else {
        console.log(i)
    }
}

//-----------------------------------------------------------------------------------------------------------------

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i=0;i<101;i++) {
    if (i%5 == 0) {
        console.log("I found a " + i +". High five!")
    } else {
        console.log(i)
    }
}

//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let i=0;i<101;i++) {
    if (i%5 == 0) {
        console.log("I found a " + i +". High five!")
    } else if (i%3 == 0) {
        console.log("I found a number " + i + ". Three is a crowd")
    } else {
        console.log(i)
    }
}

//For numbers divisible by both three and five, be sure your code prints both messages
for (let i=0;i<101;i++) {
    if (i%5 == 0 && i%3 == 0) {
        console.log("I found a " + i +". High five!")
        console.log("I found a number " + i + ". Three is a crowd")
    } else if (i%5 == 0) {
        console.log("I found a " + i +". High five!")
    } else if (i%3 == 0) {
        console.log("I found a number " + i + ". Three is a crowd")
    } else {
        console.log(i)
    }
}

//-----------------------------------------------------------------------------------------------------------------

// D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for (let i=1;i<11;i++) {
bank_account += i;
}

console.log('$' + bank_account + ' in bank account.')

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
bank_account = 0;

for (let i=1;i<101;i++) {
    bank_account += i*2;
    }

console.log('$' + bank_account + ' in bank account.')

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

// III. Arrays & Control flow
// A. Talk about it:
// 1. What are the things in an array called?
// Elements

// 2. Do Arrays guarantee those things will be in order?
// No

// 3. What real-life thing could you model with an array?
// Songs in a musicians album

//-----------------------------------------------------------------------------------------------------------------

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["Those who cannot remember the past are doomed to repeat it.", "Desperation is the raw material of dramatic change. Only those who can leave behind everything they have ever believed in can hope to escape", "Basically at the very bottom of life, which seduces us all, there is only absurdity. and maybe that's what gives us joy for living, because the only thing that can defeat absurdity is lucidity."];

// C. Accessing elements
// Given the following array
const randomThings = [1, 10, "Hello", true];

// 1. How do you access the 1st element in the array?
randomThings[0];//Calling the name of the array with the array brackets surrounding the 1st index which is 0.

// 2. Change the value of "Hello" to "World"
randomThings[2] = "World";

// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

//-----------------------------------------------------------------------------------------------------------------

// D. Change values
// Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1. What would you write to access the 3rd element of the array?
ourClass[2];

// 2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octcat";

// 3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

//-----------------------------------------------------------------------------------------------------------------

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// 1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "Lewis Brindley")

// 2. Remove the 5 from the beginning of the array.
myArray.shift()

// 3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")

// 4. Remove the string of your choice from the end of the array.
myArray.pop()

// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
console.log(myArray.reverse())
//Yes the array was mutated meaning the original array was changed and no copy was made, making it a destructive method.
//The reverse method returns the same array now reversed

//-----------------------------------------------------------------------------------------------------------------

// F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... elsestatement that:

// 1. console.log()s "little number" if the number is entered is less than 100
// 2. console.log()s big number if the number is greater than or equal to 100.

let num = 69;

if (num < 100) {
    console.log("little number")
} else {
    console.log("big number")
}

//-----------------------------------------------------------------------------------------------------------------

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// 1. console.log()little number if the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey".

let num2 = 7;

if (num2 < 5) {
    console.log("little number")
} else if (num2 > 10){
    console.log("big number")
} else {
    console.log("monkey")
}

//-----------------------------------------------------------------------------------------------------------------

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2]);

// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans")

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat")

// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let shirt = thomsCloset[0][0];

// 5. In the same way, access one item from Thom's pants array.
let pants = thomsCloset[1][1];

// 6. Access one item from Thom's accessories array.
let accessory = thomsCloset[2][1];

// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log("Thom has donned a " + shirt + " and " + pants + " with a " + accessory + '.');

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1].splice(2, 1, "footie pajamas");


console.log(thomsCloset);
console.log(kristynsCloset);

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

// IV. Functions

//B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
    console.log(name + ' is cool.')
}

printCool('Bill Murray');

//-----------------------------------------------------------------------------------------------------------------

// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
    return num**3;
}

console.log(calculateCube(9));

//-----------------------------------------------------------------------------------------------------------------

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

const isVowel = (letter) => {
let up = letter.toUpperCase()
    return up == 'A' || up == 'E' || up == 'I' || up == 'O' || up == 'U' || up == 'Y';
}

console.log(isVowel('x'));

//-----------------------------------------------------------------------------------------------------------------

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

const getTwoLengths = (s1, s2) => {
    return [s1.length, s2.length]
}

console.log(getTwoLengths('dinosaur', 'frog'));

//-----------------------------------------------------------------------------------------------------------------

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (strArray) => {
    let wordLengths = [];
    strArray.forEach((word) => {
        wordLengths.push(word.length)
    })
    return wordLengths;
}

console.log(getMultipleLengths(['good', 'morning', 'everyone', 'how', 'is', 'everyone', 'doing?']));

//-----------------------------------------------------------------------------------------------------------------

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

const maxOfThree = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(maxOfThree(420, 69, 420));

//-----------------------------------------------------------------------------------------------------------------

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = (strAr) => {
let longestWord = '';
strAr.forEach((word) => {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
})
return longestWord;
}

console.log(printLongestWord(['dog', 'dolphin', 'goose', 'stegosaurus', 'giraffe', 'seal']) + ' is the longest word.')

//-----------------------------------------------------------------------------------------------------------------

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// 1. Create an object called user.
// 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {name:'Arthur', email:'arthur_morgan56@yahoo.com', age:42, purchased:[]};

//-----------------------------------------------------------------------------------------------------------------

// B. Update the user
// 1. Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.

user.email = 'arthur_morgan56@gmail.com';

// 2. Our user has had a birthday! Without changing the original userobject, increment the age value using the postfix operator. Hint: age++

user.age++

//-----------------------------------------------------------------------------------------------------------------

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key location to the object, and give it a value or some-or-other location (a string).

user.location = 'New Hanover';

//-----------------------------------------------------------------------------------------------------------------

// D. Shopaholic!
// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
user.purchased.push('carbohydrates')

// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push('peace of mind')

// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push('Merino jodhpurs')

// 4. Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[2]);

//-----------------------------------------------------------------------------------------------------------------

// E. Object-within-object

// 1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {name:'Charles Smith', age:27, location:'New Hanover', purchased:[]};

// 2. Console.log just the friend's name
console.log(user.friend.name);

// 3. Console.log just the friend's location
console.log(user.friend.location);

// 4. CHANGE the friend's age to 55
user.friend.age = 55;

// 5. The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push('The One Ring');

// 6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push('A latte');

// 7. Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);

//-----------------------------------------------------------------------------------------------------------------

// F. Loops
// 1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (let i=0;i<user.purchased.length;i++) {
    console.log(user.purchased[i]);
}

// 2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let i=0;i<user.friend.purchased.length;i++) {
    console.log(user.friend.purchased[i]);
}

//-----------------------------------------------------------------------------------------------------------------

// G. Functions can operate on objects
// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
// 2. it should increment the user's age by 1
// 3. make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
console.log(user)
const updateUser = () => {
    user.age++;
    user.name = user.name.toUpperCase();
}
updateUser()

// 4. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
const oldAndLoud = (person) => {
    person.age++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user)

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

// Cat Combinator
// 1. Mama cat
// Define an object called cat1 that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {name:'Georgina', breed:'Burmese', age:4};

console.log(cat1.age, cat1.breed);


// 2. Papa cat
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)

const cat2 = {name:'Whiskers', breed:'Abyssinian', age:5};


// 3. Combine Cats!
// The cats are multiplying!
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.

// const combineCats = (mama, papa) => {
// console.log(mama, papa);
// }
// combineCats(cat1, cat2)

// Make it so the combineCats function will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between

const combineCats = (mama, papa) => {
    let newCat = {};
    newCat.name = mama.name.concat(papa.name);
    newCat.breed = mama.breed.concat('-', papa.breed);
    newCat.age = 1;
    return newCat;
}

console.log(combineCats(cat1, cat2));

// 4. Cat brain bender
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)))); //lol
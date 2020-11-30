/**
 * String Manipulation allows us to alter or change the primative values of strings by using various methods.
 **/


/**
 * WITH OPERATORS
 * You can join strings together using the + operator to concat variables
 **/
 
let greet = "hello";
let instructor = "Ryan";

let example = greet + " " + instructor; 
console.log(example); // this would send "hello Ryan" to the console


 
 /**
 * WITH STRING METHODS
 * 
 **/
 
//.length method returns the length of the string
 
let name = "Zach";
name.length; // would return 4 (the length of "zach")
 
//.toLowerCase() returns the string in all lowercase
 
name = "Zach";
name.toLowerCase(); // returns "zach"
 
//.toUpperCase() returns the string in all uppercase
 
name = "Zach";
name.toUpperCase(); // returns "ZACH"
 
//.replace() allows you to replace one substring inside of a larger string
 
name = "Zach";
name.substring("ach", "ordon"); // this replaces "Zach" with the much hated, much less cool "Zordon"
 
//.charAt() returns the character using the index number as a parameter

name = "Zach";
name.charAt(3);// returns "h"

//.indexOf() returns the index number by the first instance of a character

let fullName = "Zachary";
fullName.indexOf("a"); // this would return "1" as "a" is in index 1

//.lastIndexOf() will return the last instance of a specified character

fullName = "Zachary";
fullName.lastIndexOf("a");// this would return 4, as the second/ last "a" is located there

//.slice() returns the characters between two index numbers

fullName = "Zachary";
fullName.slice(2, 5); // output would be "char"

//.split() will take a string and separate it into an array of the given sections

let greeting = "Zach says hi";
greeting.split(" "); //output would be ["Zach", "says", "hi"];


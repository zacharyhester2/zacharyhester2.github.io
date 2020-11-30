/**
 * OPERATORS
 * 
 * ASSIGNMENT - Assigns a value to a variable
 **/
 
 let x = 10;
 
 /**
 * ARITHMETIC - Used to perform math equations.
 **/
 
 x = 9 + 7; // + addition, x would equal 16
 x = 9 - 7; // - subtraction, x would equal 2
 x = 9 * 7; // * multiplication, x would equal 63
 x = 9 ** 7; // ** exponential, x would equal 4,782,969
 x = 9 / 7; // / division, x would equal 1.28
 x = 9 % 2; // %  modulus (Division remainder), x would return 2
 
 
 
 
 /**
 * COMPARISON - used to determine the equality of or difference between values
 **/
 
 x = 10; // assume x is equal to 10 for examples below
 
 x == "10"; // this will return true, as it tests the value and doesn't need the type to match
 x === 10;  // equal value and equal type
 x  != 9;   // NOT equal
 x  !== "9";   // NOT equal to value AND type
 x  > 9;     // Greater than
 x  < 11;     // Less than
 x  >= 9;   // Greater than or equal to
 x  <= 11;    // Less than or equal to
 
 /**
 * LOGICAL - used to determine the logic between two variables or values
 **/
 x = 10; // assume x = 10 and y = 5 for the following examples
 let y = 5;
 
 (x > 9 && y < x);    // logical AND would return TRUE
 (x == 3 || y == 3);  // logical OR would return FALSE
 !(x == y);           // not logical would return TRUE here
 
 
 
 /** 
 * UNARY - takes a single operand/ argument and performs 
 * an operation.
 **/
 
 /**
 * TERNARY - takes three operands. The ternary operator
 * is a condition followed by (?) and then two potential
 * outcomes divided by (:).
 **/
 
 let age = 32;
 let drink = (age >= 21) ? "wine" : "water";
 console.log(drink); // would return "wine" to the console
 
 
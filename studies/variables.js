/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/**
 * VAR - Somewhat outdated variable declaration that existed by itself pre ES6
 * in 2015. 
 * 
 * VAR is Global Scoped
 * VAR is Function Scoped
 * VAR is NOT Block Scoped
 * VAR can be reassigned
 * 
 **/
 
 var age = 32;
 
 /**
 * 
 * LET - Preferred for variable declaration. 
 * 
 * LET is NOT Global Scoped
 * LET is Function Scoped
 * LET is Block Scoped
 * LET can be reassigned
 * 
 **/
 
 let name = "Zach";
 
 /**
 * 
 * CONST - Const cannot be reassigned, which makes it ideal for data that we know
 * will not change; ex. someone's birthday.
 * 
 * CONST is NOT Global Scoped
 * Const is Function Scoped
 * Const is Block Scoped
 * Const can NOT be reassigned
 * 
 **/
 
 const zachBirthday = "July 31, 1988";
 
 /**
  * HOISTING - A component of JS where variables and functions are moved
  * to the top of their scope before code execution.
  * 
  * Hoisting is a JS mechanism where variables and function declarations 
  * are moved to the top of their scope before code execution. So VAR
  * is hoisted to the top of the scope and initalized with a value of 
  * "undefined".
  * 
  * Unlike VAR, LET and CONST are not initalized. So if you try to use a LET 
  * or CONST variable before declaration, you'll get a "Reference Error".
  * 
  **/
  
  console.log(greeter);
  var greeter = "say hello";
  
  /** 
   * Only declarations are hoisted, not initializations.
   * 
   * */
   
console.log(newAge);   // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var newAge;            // Declaration
newAge = 33;           // Initialization
  
  
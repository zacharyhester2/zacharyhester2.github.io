/**
 * DATATYPES
 * 
 * Programming languages have built-in data structures, but these often
 * differ from one language to another.
 *
 **/
 
 
 /** 
 * NUMBER - Primative datatype of any numerical value.
 * 
 **/
 
 let num = 8;
 console.log(num); //prints 8 to the console
 
 /** 
 * STRING - Simple datatype that represents textual data.
 *
 **/
 
 let string = "this is a string";
 console.log(string); //prints "this is a string" to the console
 
 /** 
 * BOOLEAN - A primative datatype that reduces to a True 
 * or False result.
 * 
 **/
 
 let boolean = true;
 console.log(boolean);// prints "true" to the console
 
 /**
 * ARRAY - A complex datatype collection of data that stores 
 * multiple values into a data structure.
 * 
 **/
 
 let pets = ["dog", "cat"];
 console.log(pets);//prints ["dog", "cat"] to the console
 
 /** 
 * OBJECT - A complex datatype that allows you to store multiple
 * properties to one variable
 * 
 **/ 
 
 let football = {
     QB : "Drew Brees",
     RB : "Alvin Kamara",
     RB2 : "Latavius Murray"
 };
 
 /**
 * FUNCTION - A block of code designed to perform a particular task.
 * Instead of holding a singular value or set of properties,
 * it holds the value of a task.
 * 
 **/
 
 function add(sum1, sum2){
     return sum1 + sum2;
 }
 
 /** 
 * 
 * UNDEFINED - A primative datatype which indicates the value
 * has no actual arguments.
 * 
 **/
 
 let z; // create a variable without an assigned value
 console.log("z's value is", z); // "z's value is undefined"
 
 /** 
 * NULL - represents a nonexistent or invalid object.
 **/
 
 /**
 * NaN - Not a Number is a property of the global object. 
 * Technically, NaN is defined typeOf as a "number". 
 * 
 **/
 
 /**
 * INFINITY - numerical value representing infinity. 
 *
 **/
 
 
 /** 
 * -INFINITY - represents the negative numerical value
 * of negative infinity.
 *
 **/
 
 /** 
 * PRIMITIVE DATA - Copy by value. Primative datatypes
 * actually contain their values in them. For instance,
 * var x = 10; actually contains 10 in it. 
 * 
 * Boolean
 * Null
 * Undefined
 * String
 * Number
 *
 * 
 **/
 
 /**
 * COMPLEX DATA - Copy by reference. Object, Array, Function.
 * These variables do not actually contain their value,
 * they contain a reference to that value. It's the difference
 * between having a car in the variable and having a picture
 * of that car in the variable.
 * 
 **/
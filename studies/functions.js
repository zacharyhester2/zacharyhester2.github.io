/**
 * FUNCTIONS - Fundamental building block in JS, a set of statements that performs a task or calculates a value.
 * 
 * TWO PHASES OF FUNCTIONS - functions consist of the creation phase and the exectuion phase
 * 
 * 
 *       function functionName(parameters) {
 *               // code to be executed
 *       }
 * 
 * PARAMTERS VS ARGUMENTS - A parameter is a named variable passed into a function. 
 * The difference between parameters and arguments: Function parameters are the names listed in the function's definition. 
 * Function arguments are the real values passed to the function. 
 **/
 
 /**
 * SYNTAX FOR NAMED FUNCTION - you want to call "function" and then assign it a name, "lebron", and then hold a parameter or argument
 * inside the parenthese 
 **/ 
 
    function lebron (titles) { 
        return 4; 
    }
    
    console.log(lebron()); //prints 4 to the console
    
 /** 
 * ASSIGNING A FUNCTION TO A VAR - Functions are objects. You can work with functions as if they were objects. 
 * For example, you can assign functions to variables, to array elements, and to other objects. 
 * They can also be passed around as arguments to other functions or be returned from those functions.
 **/
 
    let lebronTitles = function(){
        return 4;
    };
    
    console.log(lebronTitles()); // prints 4 to the console
    
 /**
 * SCOPE - There are two scopes-- global and local. Global scopes are declared in the root of the file and can be used/ called anywhere 
 * in the global window/ anywhere in the document. Local variables are declared INSIDE a function and can only be used/ returned/ or accessed
 * inside that local scope/ function. 
 **/
 
    let global = "global scoped";
    
    function example(parameter){
        
        let local = "local"; // let local is a variable assigned in the local scope and can only be utilized within this function
        console.log(local);
    }
    
    console.log(example()); // prints local to the console
    console.log(global); // would print "global scoped" to the console
 
 /** 
 * CLOSURES - Typically thought of as functions inside of functions. While this is true, it's not closures in its entirety.
 * Every scope has access to everything outside of its scope. For instance, the inside of a function would have access to all
 * information outside of it's scope. Though the OUTER scopes would not necessarily have access to everything within the function.
 * 
 **/
 
    function outerfunction(outerVariable){
        return function innerFunction(innerVariable){
            console.log('Outer Variable: ' + outerVariable);    //  prints "Outer Variable: outside" to the console
            console.log('Inner Variable: ' + innerVariable);    //  prints "Inner Variable: inner" to the console
        };
    }
    
    let newFunction = outerfunction('outside'); 
    newFunction('inner');
    
    // if you run console.log(outerVariable); here, it will print ReferenceError: outerVariable is not defined to the console
    
    



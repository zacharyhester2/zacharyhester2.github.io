 let x = 10;
 
// WHILE - A while statement executes its statements as long as a specified condition is true
 while (x++ < 20){  
     return true;   // this will return false once x == 20, after ten loops
 }   
  
// FOR loop has three sections of code, declaration/ initalize, code statement, then incrimentor
 for(let i = 0; i < 5; i++){    
    console.log("Example ran five times"); //this loop will run "Example ran five times" to the console 5 times
 }          
 
// FOR IN - Used for objects. Iterates over a specified variable and for each distinct property, it executes a specified block of code. 
 let teams = {      // sample object to use for a FOR IN loop
     basketball : "Pels",
     football : "Saints",
     baseball : "King Cakes or something"
 };
 
 for(let property in teams){
     // var in obj
     console.log(property); // would print "Pels", "Saints", and "King Cakes or something" to the console
 }
    
  
 // ARRAY EXAMPLE 
  let arr =  [1, 2, 3, 4, 5]; // array example that we will loop through backwards
 
  for (var i = arr.length - 1; i >= 0; i--) { // to loop through this array backwards you want to start at the end
    // you can access the end by using .length - 1 in the initial block of code, you then move backwards using a decrement i--
    console.log(arr[i]);
}         
  

 
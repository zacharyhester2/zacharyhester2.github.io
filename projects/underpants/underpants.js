// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;   //input is any value
                    //output is that value unchanged
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(Array.isArray(value)){ //make sure to check specifically if it's array first so it doesn't return any object
        return "array"; // return array
    } else if(value === null){ //null is the other exception with typeof, so check if null here
        return "null";
    } else if(typeof values){ //all other values are built into the typeof
        return typeof value;
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){ //arguments: array, number
    if(!Array.isArray(array) || number < 0){ //use NOTArray.isArray and check if the number is less than 0 because of the edge cases
        return []; //return empty array
    } else if(typeof number !== "number" || number < 1){ //if it's not a number OR number is less than 1
        return array[0]; //return the 0 index of array
    } else{
        return array.splice(0, number); //splice the array at the first number
    }
    
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){ //arguments: array, number
    if(!Array.isArray(array) || number < 0){ //obj. 1
        return [];
    } else if(typeof number !== "number"){ // obj. 2
        return array[array.length - 1]; //return last element in <array>
    } else if(number > array.length){ // if number is larger than the lemgth of the array...
        return array; //return the array
    } else{
        return array.slice(array.length - number); //if it doesn't meet these conditions,
        //return the array sliced at the length of the array minus the number
    }
    
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){ //arguments: array and value
    for(let i = 0; i < array.length; i++){ //access the array at every i point to search for v
        if(value === array[i]){
            return i; //return the index
        }
    }//find first occurrance of value   
    return -1;  //if it's NOT in the array, return -1
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){//arguments: array, value
    return array.includes(value) ? true: false; //BOOM
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){ //arguments: collection and func
    if(Array.isArray(collection)){  //If collection is an array..
        for(let i=0; i < collection.length; i++) //...iterate over each element...
        func(collection[i], i, collection);//and call function once for each of i
    } else if (typeof collection === "object"){ //if collection is an object...
        for(let key in collection){ //loop over each property and..
            func(collection[key], key, collection); //perform function on each property
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){ //argument: array
    return array.filter((a, b) => array.indexOf(a) === b); 
    //ternary HoF using arrow and .filter that checks value a and b against one another and removes
    //dupes
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    let newArray = [];      // create an empty array for when we need to push the true values together
    _.each(array, function(e, i, array){ //using each to iterate through the array and call the func on each element and i
        let result = func(e, i, array); //let new var equal e, i, array with func called on them
        if(result === true){ //if true...
            newArray.push(e); //..push the elements into the new array
        }
    }); return newArray;
};


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func){ //arguments array and func
    let newArray = []; //create empty array as empty vessel for later...
    _.each(array, function(e, i, array){ //pass the arguments e, i, array through the array using .each
        let result = func(e, i, array); //let the result = the func applied to e, i, array
        if(result !== true){
            newArray.push(e);   //the opposite/ inverse of .filter
        }
    }); return newArray;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    let newArray = [[], []]; //create an array with two sub arrays
    _.each(array, function(e, key, array){ //call the function for each element passing the arguments (e, key, array)
        let result = func(e, key, array); //
        if(result === true){
            newArray[0].push(e);
        
        } else if(result === false){
            newArray[1].push(e);
        }
    }); return newArray;
};

/*
_.partition = function(array, func){
    return [_.filter(array, func), _.reject(array, func)]; //using filter and reject
};
*/

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    let newCollection = [];
    _.each(collection, function(e, i, collection){
        newCollection.push(func(e, i, collection));
    });
    
    return newCollection;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(arrayObj, property){
    let pluckArray = [];
    _.map(arrayObj, function(e, i, arrayObj){
        pluckArray.push(e[property]);
    });
    return pluckArray;
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function (collection, func){
    let result = true;
    _.each(collection, function(e, i, collection){
        if (typeof func === "function"){
            if(!func(e ,i, collection)){
            result = false;
            }
        }else if ( !e ){
          result = false;
        }
    });
   return result;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, func){
           let result = false;
        _.each(collection, function(e, i, collection){
            if(typeof func === "function"){
                if(func(e, i, collection)){
                    result = true;
                }
            } else if (e){
                result = true;
            }
        });
        return result;
    };

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (array, func, seed){
    let previous = seed; //step 3, seed is the previous result
    if(seed === undefined){ // step4, if no seed was given... 
        let previous = array[0]; // ...the first element is the seed and then continues to the next element
        for(let i = 1; i < array.length; i++){ // pt1, call the func for every element in the array
            previous = func(previous, array[i], i); //reset previous to equal the func applied to the seed, array[i], and i
        }
        return previous;    //return previous
    }
    for(let i = 0; i < array.length; i++){   //create a second loop starting at e0
        previous = func(previous, array[i], i); //..and reassign previous to equal prev, array[i], i
    }
    return previous;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj1, ...obj2){
    Object.assign(obj1, ...obj2);
    return obj1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}

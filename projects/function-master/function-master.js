//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    
    return Object.values(object); //OBJECT.values is a method that takes the objects and returns the values in the object as an array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var key2 = Object.keys(object); // OBJECT.keys returns an array of the objects properties 
        return key2.join(" "); // returning the objects properties from the line before joined in a string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var key3 =[]; // creating an empty array to build into
    for(var key in object){ //loops through the values
        if(typeof object[key] === 'string') //if the key value is a string
        key3.push(object[key]); //push the object.key into it
    } return key3.join(" "); //join the keys by a stringed space
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){ //checks to see if it's an array and returns it if it is an array
        return "array";
    }
    else if (typeof collection === "object"){//checks if it's any other type of object
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1); // return the first element of the string and then uppercase it and slice it back with the rest of the word
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var first = string.split(" "); //creating a variable that splits the string by spaces
    var arr = []; //create an empty array to push value in
    for(var i=0; i < first.length; i++){ //loop over the length of the split string to access each index
        arr.push(first[i][0].toUpperCase() + first[i].slice(1));
    //push the first element of each index to upper case and then slice it back together
        
    } return arr.join(" "); //return it all joined together, like a frankenstein
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    for(var key in object){
    if("name" === key){ //if the key is equal to the name...
        return "Welcome" + " " + object[key].charAt(0).toUpperCase() + object[key].slice(1) + "!"; //
        //return the string concated with the object key at the first letter (forced to uppercase) and then joined back together with the rest of the word using slice
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${object.name[0].toUpperCase()}${object.name.slice(1)} is a ${object.species[0].toUpperCase()}${object.species.slice(1)}`;
    // using template literals return the object names first element capitalized and then joined with the rest of the word followed by "is a" and capitalized the rest of the word
    
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    for(let key in object){ //run a for in loop over the object
        if(object[key].length > 0 && Array.isArray(object[key]) && key === "noises"){ 
            //if the object key's length is greater than zero and it is an array and the key equals noises..
            return object[key].join(" "); // ..return the object key joined together
        }
    }
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.split(" ").includes(word)){return true}
    //if the split string includes the word, return true
    else {return false} //return false if not
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //add the name parameter to the list of friends inside the object
    object.friends.push(name);
    //retunr the new object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
        //if object.friends is an array and has property "friends", run a for loop..
    for(var i = 0; i < object.friends.length; i++) {
      if(name === object.friends[i]) { // if the name === object.friends at any point in the index return true
        return true;
      }
    }
  }
 return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//passing in an array containing people objects with name and friends properties
                                    //return a list of all the names not friends
        //create a nonFriends array to be returned at the end after my logic -ryguy tutor runthru
        // Input: name <string> && array <full of people.
        // Output: array full of all the non friends of the name argument
        // Constraints: must look through array of objects and find name argument
            // and then using the person freinds array and loop again through the array
            // of objects and see who isn't in the freinds of array of that person
            // Edge Cases: NA
            // Looping through main array twice: first loop to find the person in question, and then after first loop 
                // loop through again access that person's array of friends and then compare with who is NOT in that array.
                
    let notFriends = [];
    
    //loop through array of objects
    
    for(let i = 0; i < array.length; i++){ //must look through array of objects and find that name argument
                                            // check that the object name does not match the name
        
        if( array[i]["name"] !== name && !array[i]["friends"].includes(name)){
            // then push the not friend into notFriends
            notFriends.push(array[i]["name"]);
        }
        
    
}

return notFriends;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //make the object key equal value, return the object
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (let key in object){ //for in loop
            if (array.includes(key) && array.length >0){ //if the array has a key and is longer thn 0, delete the key
                delete object[key];
            }
        } return object;
        
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
    //using .filter to compare a and b, if they equal one another, remove the duplicates
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
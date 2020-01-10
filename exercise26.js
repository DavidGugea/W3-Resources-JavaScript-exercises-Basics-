/*
26. Write a JavaScript program to create a new string from a given string taking the last 3 
characters and added at both the front and back. The string length must be 3 or more.
*/
function func(givenString){
    if(givenString.length < 3){
        return givenString;
    }else if(givenString.length >= 3){
        // abcdef -- > length: 6; last index: 5 //  last 3 char index: 3
        // AaaBBB -- > length: 6; last index: 5 // last 3 char index: 3 
        return givenString.substring(givenString.length-3, givenString.length) + givenString + givenString.substring(givenString.length-3, givenString.length);
    };
};

console.log(func("AaaBBB"));
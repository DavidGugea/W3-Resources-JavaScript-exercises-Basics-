/*
62. Write a JavaScript program to move last three character to the start of a given string. 
The string length must be greater or equal to three.
*/
function func(givenString){
    return givenString.substring(givenString.length-3).concat(givenString.substring(0, givenString.length-3));
};

console.log(func("Python"));
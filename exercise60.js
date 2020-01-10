/*
60. Write a JavaScript program to create a new string without the first and last character of a given string. 
*/

function func(givenString){
    return givenString.substring(1, givenString.length-1);
};

console.log(func("aabca"));
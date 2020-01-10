/*
68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. 
The string length must be greater or equal to n. 
*/

function func(givenString, n){
    if(givenString.length >= n){
        return givenString.substring(0, n).concat(givenString.substring(givenString.length-n, givenString.length));
    };
};

console.log(func("abxcd", 2));
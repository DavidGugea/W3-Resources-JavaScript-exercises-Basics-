/*
61. Write a JavaScript program to concatenate two strings except their first character. 
*/

function func(firstString, secondString){
    return firstString.substring(1, firstString.legth).concat(secondString.substring(1, secondString.length));
};

console.log(func("aabc", "bbcd"));
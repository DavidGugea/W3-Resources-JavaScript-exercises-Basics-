/*
52. Write a JavaScript program to convert the letters of a given string in alphabetical order. 
*/

function func(givenString){
    return givenString.split("").sort().join("");
}

console.log(func("sidfjisdojfjsaoisadacfegdbbb"));
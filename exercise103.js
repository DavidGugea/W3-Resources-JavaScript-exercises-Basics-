/*
103. Write a JavaScript program to find the maximal number from a given
positive integer by deleting exactly one digit of the given number. 
*/

function func(givenString){
    let returnString = givenString.split("").sort();
    returnString.shift();
    return returnString.reverse().join("");
};

console.log(func("123"));
console.log(func("321"));
console.log(func("9876781923"));
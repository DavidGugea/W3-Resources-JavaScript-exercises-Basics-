/*
63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
The string length must be greater or equal to three.
*/ 

function func(givenString){
    if(givenString % 2 !== 0){
        return givenString.charAt(Math.floor(givenString.length/2-1)).concat(givenString.charAt(Math.floor(givenString.length/2))).concat(givenString.charAt(Math.floor(givenString.length/2+1)));
    };
};

console.log(func("aabca"));
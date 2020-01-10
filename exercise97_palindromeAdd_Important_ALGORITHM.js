/*
97. Write a JavaScript program to find the shortest possible string which can create a
string to make it a palindrome by adding characters to the end of it.
*/

function func(givenString){
    // abc == > ba
    let palindromeAddArray = new Array();
    for(let i = 0; i < givenString.length-1; i++){
        palindromeAddArray.push(givenString[i]);
    }
    return givenString + palindromeAddArray.reverse().join("");
};

console.log(func("abc"));
/*
37. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string.
If the string length is less than 3 convert all the characters in upper case.
*/
function func(givenString){
    if(givenString.length < 3){
        return givenString.toUpperCase();
    }else if(givenString => 3){
        return givenString.substring(0, 3).toLowerCase() + givenString.substring(2, givenString.length-1);
    };
};

console.log(func("AAA"));
console.log(func("aaa"));
console.log(func("aa"));
console.log(func("AA"));
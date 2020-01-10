/*
24. Write a JavaScript program to create a new string from a given string with the first 
character of the given string added at the front and back.
*/
function func(givenString){
    return givenString.charAt(0) + givenString + givenString.charAt(0);
}

console.log(func("asd")); // aasda
console.log(func("AaaaB")); // AAaaaBA
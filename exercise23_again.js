/*
23. Write a JavaScript program to create a new string from a given string changing the position 
of first and last characters. The string length must be greater than or equal to 1.
*/
function func(givenString){
    if(givenString.length <= 1){
        return givenString;
    }else if(givenString.length > 1){
        return givenString.charAt(givenString.length-1) + givenString.substring(1, givenString.length-1) + givenString.charAt(0);
    }
}

console.log(func("asd")); // dsa
console.log(func("AaaaB")); // BaaaA
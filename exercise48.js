/*
48. Write a JavaScript program to reverse a given string.
*/

function func(givenString){
    let splitString = givenString.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}

console.log(func("ABC"));
console.log(func("123456789"));
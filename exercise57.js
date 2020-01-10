/*
57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string. 
*/

function func(givenString, numberOfCopies){
    let returnString = "";
    for(let i = 0; i < numberOfCopies; i++){
        returnString += givenString;
    };

    return returnString;
};

console.log(func("abc", 5));
console.log(func("abc", 2));
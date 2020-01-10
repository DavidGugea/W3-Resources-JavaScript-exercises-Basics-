/*
49. Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet.
*/

let space = (spaces) => {
    for(let i = 1; i <= spaces; i++){
        console.log(" ");
    };
};

function func(givenString){
    let returnString = "";
    for(let i = 0; i < givenString.length; i++){
        switch(givenString[i]){
            case undefined:
                break;
            case "z":
                returnString += String.fromCharCode(givenString.charCodeAt(i));
                break;
            case "Z":
                returnString += String.fromCharCode(givenString.charCodeAt(i));
                break;
            default:
                returnString += String.fromCharCode(givenString.charCodeAt(i) + 1);
        };
    };

    return returnString;
};

console.log(func("abcdzZyY"));
space(10);
console.log(func("ABCDzZyY"));
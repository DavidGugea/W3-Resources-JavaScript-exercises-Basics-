/*
149. Write a JavaScript program to change the capitalization of all letters in a given string. 
*/

function func(givenString){
    let returnString = "";
    for(let i = 0; i < givenString.length; i++){
        if(givenString[i] === givenString[i].toUpperCase()){
            returnString += givenString[i].toLowerCase();
        }else if(givenString[i] === givenString[i].toLowerCase()){
            returnString += givenString[i].toUpperCase();
        };
    };
    return returnString;
};

console.log(func("asd"));
/*
50. Write a JavaScript program to capitalize the first letter of each word of a given string.
*/

function func(givenString){
    let returnString = "";
    for(let i = 0; i <= givenString.length; i++){
        if(givenString[i] === undefined){continue;};
        if(givenString[i-1] == " "){
            returnString += givenString[i].toUpperCase();
        }else{
            returnString += givenString[i];
        };
    };

    return returnString;
};

console.log(func("ASD ASD"));
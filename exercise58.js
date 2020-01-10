/*
58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. 
The length of the given string must be 3 and above. 
*/

function func(givenString){
    if(givenString.length >= 3){
        var returnString = "";
        // 123456 == > index "4" = 3 length = 6 == > / length - 3 /
        for(let i = 0; i <= 3; i++){
            returnString += givenString[givenString.length-3] + givenString[givenString.length - 2] + givenString[givenString.length - 1];
        };
    };

    return returnString;
};

console.log(func("123abc"));
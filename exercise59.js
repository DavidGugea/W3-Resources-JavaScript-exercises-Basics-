/*
59. Write a JavaScript program to extract the first half of a string of even length. 
*/

function func(givenString){
    if(givenString.length % 2 == 0){
        let returnString = "";
        for(let i = 0; i < givenString.length/2; i++){
            returnString += givenString[i];
        };

        return returnString;
    };
};

console.log(func("abcd"));
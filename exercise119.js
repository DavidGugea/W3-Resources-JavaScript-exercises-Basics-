/*
119. Write a JavaScript program to check if a given integer has an increasing digits sequence.
*/

function func(givenString){
    let stringArray = givenString.split("");
    let returnFlag = true;
    for(let i = 1; i < stringArray.length; i++){
        if(stringArray[i] < stringArray[i-1]){
            returnFlag = false;
        };
    };

    if(returnFlag){
        return true;
    }else{
        return false;
    };
};

console.log(func("1234"));
console.log(func("4523"));
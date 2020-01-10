/*
135. Write a JavaScript program to remove all characters from a 
given string that appear more than once.
*/

function func(givenString){
    let repeatString_ARRAY = new Array();
    let prototype_ARRAY = new Array();

    let return_ARRAY = new Array();

    for(let i = 0; i < givenString.length; i++){
        if(prototype_ARRAY.includes(givenString[i])){
            repeatString_ARRAY.push(givenString[i]);
        }
        prototype_ARRAY.push(givenString[i]);
    };

    for(let i = 0; i < givenString.length; i++){
        if(!repeatString_ARRAY.includes(givenString[i])){
            return_ARRAY.push(givenString[i]);
        };
    };

    return return_ARRAY;
};

console.log(func("1122334456789"));
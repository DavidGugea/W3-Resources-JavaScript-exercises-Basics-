/*
140. Write a JavaScript program to check if all the digits in a given number are 
the same or not.
*/

function func(givenNumber){
    let flagSame = true;
    for(let i = 0; i < String(givenNumber).split("").length; i++){
        if(String(givenNumber).split("")[i] != String(givenNumber).split("")[0]){
            flagSame = false;
            break
        }
    };
    return flagSame;
};

console.log(func(1111));
console.log(func(2231));
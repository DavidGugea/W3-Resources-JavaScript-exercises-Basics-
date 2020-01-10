/*
130. Write a JavaScript program to find the number of even digits in a given integer.
*/

function func(givenInteger){
    let evenDigits = 0;
    for(let i = 0; i < String(givenInteger).split("").length; i++){
        if(eval(String(givenInteger).split("")[i]) % 2 == 0){
            evenDigits++;
        };
    };
    return evenDigits;
};

console.log(func(1234));
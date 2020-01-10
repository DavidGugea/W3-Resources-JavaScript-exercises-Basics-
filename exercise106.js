/*
106. Write a JavaScript program to divide an integer by another integer as
long as the result is an integer and return the result.
*/

function func(givenInteger, divider){
    let newInteger = givenInteger/divider;
    while(true){
        if(String(newInteger).split(".").length !== 1){
            return newInteger;
        }else{
            newInteger /= divider;
        };
    };
};

console.log(func(24, 2));
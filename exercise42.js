/*
42. Write a JavaScript program to check if three given numbers are increasing in strict mode 
or in soft mode.  Go to the editor
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31 
*/
"use strict";
function func(firstNumber, secondNumber, thirdNumber){
    for(let i = 1; i <= arguments.length; i++){
        if(arguments[i] < arguments[i-1]){
            return false;
        };
    };
    return true;
};

console.log(func(1, 2, 3)); // true
console.log(func(1, 4, 8)); // true
console.log(func(4, 5, 3)); // false
console.log(func(5, 3, 2)); // false

"use soft";
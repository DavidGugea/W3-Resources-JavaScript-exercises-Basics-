/*
40. Write a JavaScript program to check from two given integers if either one is 8 or their 
sum or difference is 8. 
*/

function func(firstNumber, secondNumber){
    if(firstNumber == 8 || secondNumber == 8 || (firstNumber + secondNumber) == 8 || (firstNumber - secondNumber) == 8){
        return true;
    }else{
        return false;
    };
};

console.log(func(5, 3));
console.log(func(11, 3));
console.log(func(8, 5));
console.log(func(5, 8));
//
console.log(func(12, 13));
console.log(func(9, 2));
console.log(func(6, 3));
console.log(func(13, 12));
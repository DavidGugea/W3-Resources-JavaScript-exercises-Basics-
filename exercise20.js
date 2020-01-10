/*
20. Write a JavaScript program to check from two given integers, 
if one is positive and one is negative. 
*/
function func(firstNumber, secondNumber){
    return((firstNumber < 0 && secondNumber > 0) || (firstNumber > 0 && secondNumber < 0));
};

console.log(func(2, 5));
console.log(func(5, 2));
console.log(func(-2, 5));
console.log(func(5, -2));
console.log(func(-5, -2));
console.log(func(-2, -5));
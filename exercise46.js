/*
46. Write a JavaScript program to check two given non-negative integers and if one of the number 
(not both) is multiple of 7 or 11. 
*/
function func(firstNumber, secondNumber){
    if(firstNumber > 0 && secondNumber > 0){
        if((firstNumber % 7 == 0 || firstNumber % 11 == 0) || (secondNumber % 7 == 0 || secondNumber % 11 == 0)){
            return true;
        }
    }
    return false;
};

console.log(func(14, 2));
console.log(func(22, 2));
console.log(func(2, 14));
console.log(func(2, 22));
//
console.log(func(77, 2));
console.log(func(2, 77));
console.log(func(77, 77));
console.log(func(13, 12));
console.log(func(12, 13));
console.log(func(-2, 7));
console.log(func(7, -2));

/*
45. Write a JavaScript program to check two given integer values and return true if one of the 
number is 15 or if their sum or difference is 15.
*/
function func(firstNumber, secondNumber){
    if(firstNumber == 15 || secondNumber == 15 || (firstNumber + secondNumber) == 15 || (firstNumber - secondNumber == 15)){
        return true;
    }else{
        return false;
    };
};

console.log(func(15, 23));
console.log(func(23, 15));
console.log(func(12, 3));
console.log(func(18, 3));
//
console.log(func(14, 16));
console.log(func(16, 14));
/*
29. Write a JavaScript program to check if three given integer values are in the range 50..99 
(inclusive). Return true if one or more of them are in the said range.
*/

function func(firstNumber, secondNumber){
    if((firstNumber >= 50 && firstNumber <= 99) || (secondNumber >= 50 && secondNumber <= 99)){
        return true;
    }else{
        return false;
    };
};

console.log(func(52, 82));
console.log(func(50, 99));
console.log(func(12, 99));
console.log(func(12, 85));
console.log(func(55, 102));
console.log(func(12, 120));
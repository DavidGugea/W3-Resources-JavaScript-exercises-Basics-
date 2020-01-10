/*
43. Write a JavaScript program to check from three given numbers (non negative integers) that 
two or all of them have the same rightmost digit.
*/
function func(firstNumber, secondNumber, thirdNumber){
    if(firstNumber > 0 && secondNumber > 0 && thirdNumber > 0){
        if(String(firstNumber)[String(firstNumber).length-1] == String(secondNumber)[String(secondNumber).length-1] && String(secondNumber)[String(secondNumber).length-1] == String(thirdNumber)[String(thirdNumber).length-1]){
            return true;
        };
        if(String(firstNumber)[String(firstNumber).length-1] == String(secondNumber)[String().length-1] || String(firstNumber)[String(firstNumber).length - 1] == String(thirdNumber)[String(thirdNumber).length-1] || String(secondNumber)[String(secondNumber).length-1] == String(thirdNumber)[String(thirdNumber).length-1]){
            return true;
        };
        return false;
    }else{
        return "The integers must be non negative integers";
    };
};

console.log(func(123, 456, 123)); // true
console.log(func(123, 123, 123)); // true
console.log(func(123, 456, 789)); // false
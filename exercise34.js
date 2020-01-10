/*
34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 
40..60 inclusive.
*/

function func(firstNumber, secondNumber){
    if(firstNumber >= 40 && firstNumber <= 60 && secondNumber >= 40 && secondNumber <= 60){
        if(firstNumber > secondNumber){
            return firstNumber;
        }else if(firstNumber < secondNumber){
            return secondNumber;
        };
    }else{
        return false;
    };
};

console.log(func(45, 60));
console.log(func(32, 40));
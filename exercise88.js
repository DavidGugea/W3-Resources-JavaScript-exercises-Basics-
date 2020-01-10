/*
88. Write a JavaScript program to check whether two given integers are similar or not, 
if a given divisor divides both integers and it does not divide either. 
*/

function func(firstNumber, secondNumber){
    let maxNumber = undefined; let minNumber = undefined;
    if(firstNumber > secondNumber){
        maxNumber = firstNumber; minNumber = secondNumber; 
    }else if(firstNumber < secondNumber){
        maxNumber = secondNumber; minNumber = firstNumber;
    };

    for(let i = 2; i <= minNumber; i++){
        if(minNumber % i == 0 && maxNumber % i == 0){
            return true;
        };
    };

    return false;
};

console.log(func(2, 8));
console.log(func(4, 6));
console.log(func(4, 5));
console.log(func(36, 19));
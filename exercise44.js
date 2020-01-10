/*
44. Write a JavaScript program to check from three given integers that if a number is greater than 
or equal to 20 and less than one of the others.
*/

function func(firstNumber, secondNumber, thirdNumber){
    if(firstNumber >= 20 && firstNumber < secondNumber && firstNumber < thirdNumber){
        return true;
    }else if(secondNumber >= 20 && secondNumber < firstNumber && secondNumber < thirdNumber){
        return true;
    }else if(thirdNumber >= 20 && thirdNumber < firstNumber && thirdNumber < secondNumber){
        return true;
    };

    return false;
};

console.log(func(1, 2, 3));
console.log(func(25, 30, 35));
console.log(func(25, 35, 16));
console.log(func(25, 30, 24));
/*
111. Write a JavaScript program to check a number from three given numbers where two 
numbers are equal, find the third one
*/

function func(firstNumber, secondNumber, thirdNumber){
    let counter = 0;
    if(firstNumber !== secondNumber && firstNumber !== thirdNumber && secondNumber !== thirdNumber){
        return false;
    }else{
        if(firstNumber == secondNumber){
            return thirdNumber;
        }else if(firstNumber == thirdNumber){
            return secondNumber;
        }else{
            return firstNumber;
        };
    };
};

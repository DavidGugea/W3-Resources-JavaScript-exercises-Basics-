/*
81. Write a JavaScript program to add two digits of a given positive integer of length two.  
*/
function func(firstNumber, secondNumber){
    if(firstNumber > 0 && secondNumber > 0){
        if(String(firstNumber).length == 2 && String(secondNumber).length == 2){
            return firstNumber + secondNumber;
        };
    };
};

/*
89. Write a JavaScript program to check whether it is possible to replace $ in a 
given expression x $ y = z with one of the four signs +, -, * or / to obtain 
a correct expression.  Go to the editor
For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator
(*) to obtain x * y = z
*/

function func(firstNumber, secondNumber, result){
    if(firstNumber + secondNumber === result){
        return true;
    }else if(firstNumber - secondNumber === result){
        return true;
    }else if(firstNumber * secondNumber === result){
        return true;
    }else if(firstNumber / secondNumber === result){
        return true;
    }else{
        return false;
    };
};

console.log(func(10, 30, 300));
console.log(func(6, 3, 2));
console.log(func(2, 3, 5));
console.log(func(3, 2, 1));
//
console.log(func(1, 2, 5));
console.log(func(1, 2, 4));
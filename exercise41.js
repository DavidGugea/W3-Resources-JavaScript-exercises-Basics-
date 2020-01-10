/*
41. Write a JavaScript program to check three given numbers, if the three numbers are same
 return 30 otherwise return 20 and if two numbers are same return 40. 
*/

function func(firstNumber, secondNumber, thirdNumber){
    if(firstNumber == secondNumber && secondNumber == thirdNumber){
        return 30;
    };
    if(firstNumber == secondNumber || secondNumber == thirdNumber || firstNumber == thirdNumber){
        return 40;
    };
    return 20;
};

console.log(func(12, 12, 30));
console.log(func(12, 30, 12));
console.log(func(30, 12, 12));
//
console.log(func(12, 12, 12));
console.log(func(17, 17, 17));
console.log(func(7, 7, 7));
//
console.log(func(1, 2, 3));
console.log(func(4, 5, 6));
console.log(func(7, 8, 9));
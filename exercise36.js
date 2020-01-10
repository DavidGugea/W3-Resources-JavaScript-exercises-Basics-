/*
36. Write a JavaScript program to check if the last digit of the three given positive integers is same. 
*/
function func(firstNumber, secondNumber, thirdNumber){
    console.log(String(firstNumber)[String(firstNumber).length-1]);
    console.log(String(secondNumber)[String(secondNumber).length-1]);
    console.log(String(thirdNumber)[String(thirdNumber).length-1]);
    if(String(firstNumber)[String(firstNumber).length-1] == String(secondNumber)[String(secondNumber).length-1] == String(thirdNumber)[String(thirdNumber).length-1]){
        return true;
    }else{
        return false;
    };
};

console.log(func(12312312319, 231231312319, 9));
console.log(func(12312319, 123139, 2));
console.log(func(1, 2, 3));
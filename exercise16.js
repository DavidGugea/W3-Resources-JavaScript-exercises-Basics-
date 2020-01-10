/*
16. Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum.
*/
function func(firstNumber, secondNumber){
    if(firstNumber !== secondNumber){
        return firstNumber + secondNumber;
    }else if(firstNumber === secondNumber){
        return 3*(firstNumber + secondNumber);
    }
};

console.log(func(1, 2)); // 3
console.log(func(2, 2)); // 12
console.log(func(3, 4)); // 7
console.log(func(4, 4)); // 24
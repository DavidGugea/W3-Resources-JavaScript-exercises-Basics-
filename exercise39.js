/*
39. Write a JavaScript program to compute the sum of the two given integers, 
If the sum is in the range 50..80 return 65 other wise return 80.
*/
function func(firstNumber, secondNumber){
    if((firstNumber + secondNumber) >= 50 && (firstNumber + secondNumber) <= 80){
        return 65;
    }else{
        return 80;
    };
};

console.log(func(50, 5));
console.log(func(123, 123));
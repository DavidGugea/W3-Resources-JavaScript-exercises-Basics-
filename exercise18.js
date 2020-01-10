/*
18. Write a JavaScript program to check two given numbers and return true if one of the number is 
50 or if their sum is 50.  
*/
function func(firstNumber, secondNumber){
    if(firstNumber == 50 || secondNumber == 50){
        return true;
    }else if(firstNumber + secondNumber === 50){
        return true;
    }else{
        return false;
    }
};

console.log(func(50, 25));
console.log(func(25, 25));
console.log(func(49, 1));
console.log(func(25, 50));
//
console.log(func(49, 49));
console.log(func(51, 51));
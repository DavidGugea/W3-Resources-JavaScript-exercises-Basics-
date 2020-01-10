/*
32. Write a JavaScript program to find a value which is nearest to 100 from two different given 
integer values. 
*/
function func(firstNumber, secondNumber){
    if((firstNumber - 100) < 0){
        var diff_firstNumber = Math.abs(firstNumber-100);
    }else{
        var diff_firstNumber = firstNumber-100;
    };

    if((secondNumber-100) < 0){
        var diff_secondNumber = Math.abs(secondNumber - 100);
    }else{
        var diff_secondNumber = secondNumber-100;
    };

    if(diff_firstNumber < diff_secondNumber){
        return firstNumber;
    }else if(diff_firstNumber > diff_secondNumber){
        return secondNumber;
    }
};

console.log(func(101, 92));
console.log(func(102, 94));
console.log(func(120, 99));
console.log(func(19123012, 14));
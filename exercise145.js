/*
145. Write a JavaScript program to find the maximum integer n such that 
1 + 2 + ... + n <= an given integer. 
*/

function func(maxNum){
    var counter = 0;
    var ult_Num = 0;
    while(ult_Num <= maxNum){
        ult_Num += counter++;
    };
    return counter-2;
};

console.log(func(11));
console.log(func(15));
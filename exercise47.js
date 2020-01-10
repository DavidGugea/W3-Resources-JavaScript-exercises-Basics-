/*
47. Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in 
two number (in same range).  Go to the editor
For example 40 presents in 400 and 4000
*/

function func(main_num, firstNumRange, secondNumRange){
    if(!(main_num >= firstNumRange && main_num <= secondNumRange) || !(main_num >= 40 && main_num <= 10000)){
        return false;
    }else{
        return true;
    };
};


console.log(func(40, 4000, 45));  
console.log(func(80, 320, 79));  
console.log(func(89, 4000, 30));
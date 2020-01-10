/*
123. Write a JavaScript program to find if the members of an given array of integers
is a permutation of numbers from 1 to a given integer.
*/

function func(givenArray, num){
    let checkArray = new Array();
    for(let i = 1; i <= num; i++){
        checkArray.push(i);
    };
    
    if(checkArray.join("") == givenArray.join("")){
        return true;
    }else{
        return false;
    };
};


console.log(func([1, 2, 3, 4, 5], 5));
console.log(func([1, 2, 3, 5], 5));
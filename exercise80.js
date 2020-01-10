/*
80. Write a JavaScript program to swap the first and last elements of a given array of integers. 
The array length should be at least 1. 
*/

function func(givenArray){
    if(givenArray.length >= 1){
        let returnArray = new Array();
        returnArray.push(givenArray[givenArray.length-1], givenArray[1, givenArray.length-2], givenArray[0]);
        return returnArray;
    }else{
        return false;
    };
};

console.log(func([1, 2, 3]));
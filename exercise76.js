/*
76. Write a JavaScript program to create a new array taking the first and 
last elements from a given array of integers and length must be greater or equal to 1. 
*/

function func(givenArray){
    let returnArray = new Array();
    returnArray.push(givenArray[0], givenArray[givenArray.length-1]);
    return returnArray;
};

console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
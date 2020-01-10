/*
71. Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. 
The array length must be greater or equal to 1. 
*/

function func(givenArray){
    return Boolean((1 === givenArray[0]) || (1 === givenArray[1]));
};

console.log(func([1, 2, 3]));
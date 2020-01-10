/*
75. Write a JavaScript program to create a new array taking the middle 
elements of the two arrays of integer and each length 3.  
*/

function func(firstArray, secondArray){
    let returnArray = new Array();
    returnArray.push(firstArray[Math.floor(firstArray.length/2)], secondArray[Math.floor(secondArray.length/2)]);
    return returnArray;
};

console.log(func([1, 2, 3], [1, 5, 6]));
/*
100. Write a JavaScript program to check if there is at least one element which occurs
in two given sorted arrays of integers.
*/

function func(firstArray, secondArray){
    for(let i = 0; i < firstArray.length; i++){
        if(secondArray.includes(firstArray[i])){
            return true;
        }
    }
};

console.log(func([1, 2, 3], [4, 5, 3]));
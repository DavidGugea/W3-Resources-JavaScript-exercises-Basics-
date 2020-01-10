/*
141. Write a JavaScript program to find the number of elements which presents in
both of the given arrays.
*/

function func(firstArray, secondArray){
    let returnArray = new Array();
    for(let i = 0; i < firstArray.length; i++){
        if(secondArray.includes(firstArray[i])){
            returnArray.push(firstArray[i]);
        }
    };
    return returnArray;
};

console.log(func([1, 2, 3], [1, 2, 3, 4]));
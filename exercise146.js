/*
146. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given
integer.
*/

function func(givenNumber){
    let returnSum = 0;
    for(let i = 0; i < givenNumber; i++){
        returnSum += Math.pow(i, 3);
    };
    return returnSum;
}
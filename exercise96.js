/*
96. Write a JavaScript program to compute the sum of absolute differences of
consecutive numbers of a given array of integers.
*/

function func(givenArray){
    let returnNum = 0;
    for(let i = 1; i < givenArray.length; i++){
        returnNum += Math.abs(givenArray[i] - givenArray[i-1]);
    };
    return returnNum;
};

console.log(func([1, 2, 3, 2, -5]));
/*
92. Write a JavaScript program to find the maximal difference between any two adjacent elements
of a given array of integers.
*/

function func(givenArray){
    let minDifference = givenArray[1] - givenArray[0];
    for(let i = 1; i < givenArray.length; i++){
        let difference = givenArray[i] - givenArray[i-1];
        if(difference < minDifference){
            minDifference = difference;
        };
    };

    return minDifference;
};

function func_max(givenArray){
    let maxDifference = 0;
    for(let i = 1; i <= givenArray.length; i++){
        let difference = givenArray[i] - givenArray[i - 1];
        if(difference > maxDifference){
            maxDifference = difference;
        };
    };

    return maxDifference;
};

console.log(func([1, 2, 3, 8, 9]));
console.log(func_max([1, 2, 3, 8, 9]));
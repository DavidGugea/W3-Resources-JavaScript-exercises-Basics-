/*
95. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
*/

function func(givenArray, replaceNum){
    let returnArray = [];
    givenArray.forEach(element => {
        returnArray.push(replaceNum);
    });
    return returnArray;
};

console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
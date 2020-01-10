/*
148. Write a JavaScript program to swap two halves of a given array of integers of even length.
*/

function func(givenArray){
    let returnArray = new Array();
    for(let i = givenArray.length; i >= givenArray.length / 2; i--){
        returnArray.push(givenArray[i]);
    };
    for(let i = 0; i < givenArray.length / 2; i++){
        returnArray.push(givenArray[i]);
    };
    return returnArray;
};

console.log(func([1, 2, 3, 4, 5, 6]));
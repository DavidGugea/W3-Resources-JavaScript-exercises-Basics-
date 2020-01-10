/*
110. Write a JavaScript program to find the number of even values in sequence
before the first occurrence of a given number.
*/

function func(givenArray, num){
    let returnCounter = 0;
    for(let i = 0;i < givenArray.length; i++){
        if(givenArray[i] === num){
            break;
        };
        if(givenArray[i] % 2 === 0){
            returnCounter++;
        }
    };

    return returnCounter;
};

console.log(func([2, 4, 8, 10, 5], 5));
console.log(func([2, 4, 8, 5, 10], 5));
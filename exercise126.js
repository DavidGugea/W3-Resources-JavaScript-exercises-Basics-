/*
126. Write a JavaScript program to get the largest even number from an array of integers.
*/

function func(givenArray){
    let evenArray = new Array();
    for(let i = 0 ; i < givenArray.length; i++){
        if(givenArray[i] % 2 == 0){
            evenArray.push(givenArray[i]);
        };
    };
    let maxNumber = evenArray[0];
    for(let i = 0 ; i < evenArray.length; i++){
        if(evenArray[i] > evenArray[i-1]){
            maxNumber = evenArray[i];
        };
    };

    return maxNumber;
};

console.log(func([1, 2, 3, 4]));
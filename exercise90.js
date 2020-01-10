/*
90. Write a JavaScript program to find the kth greatest element of a given
array of integers
*/

function func(givenArray, n){
    givenArray.sort();
    console.log(givenArray);
    for(let i = 0; i < givenArray.length; i++){
        if(i === n-1){
            return givenArray[i];
        };
    };
};

console.log(func([1, 4, 9, 8], 2));
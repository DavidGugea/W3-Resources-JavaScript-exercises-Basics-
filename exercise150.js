/*
150. Write a JavaScript program to swap pairs of adjacent digits of a given integer
of even length.
*/

function func(givenArray){
    let returnArray = new Array();
    for(let i = 0; i < givenArray.length; i+=2){
        if(givenArray[i+1] % 2 == 0){
            returnArray.push(givenArray[i+1], givenArray[i]);
        }else{
            givenArray.push(givenArray[i], givenArray[i+1]);
        };
    };
    return returnArray;
};

console.log(func([1, 2, 3, 4]));
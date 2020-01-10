/*
125. Write a JavaScript program to find the longest string from a given array. 
*/

function func(givenArray){
    let returnString = givenArray[0];
    for(let i = 1; i < givenArray.length; i++){
        if(givenArray[i].length > givenArray[i-1].length){
            returnString = givenArray[i];
        }
    };
    return returnString;
};

console.log(func(["asd", "a", "abca", "b"]));
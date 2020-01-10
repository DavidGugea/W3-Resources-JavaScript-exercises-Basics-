/*
83. Write a JavaScript to find the longest string from an given array of strings.
*/

function func(givenArray){
    let returnString = givenArray[0];
    for(let i = 0; i < givenArray.length; i++){
        if(givenArray[i].length > returnString.length){
            returnString = givenArray[i];
        };
    };
    return returnString;
};

console.log(func(["a", "b", "c", "abc"]));
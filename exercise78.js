/*
78. Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.
*/

function func(givenArray){
    if(givenArray.includes(1) && givenArray.includes(3)){
        return false;
    }else{
        return true;
    };
};
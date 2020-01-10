/*
74. Write a JavaScript program to find the larger value between the 
first or last and set all the other elements with that value. 
Display the new array. 
*/

function func(givenArray){
    let returnArray = new Array();
    if(givenArray[0] > givenArray[givenArray.length-1]){
        givenArray.forEach(element => {returnArray.push(givenArray[0])});
    }else if(givenArray[0] < givenArray[givenArray.length-1]){
        givenArray.forEach(element => {returnArray.push(givenArray[givenArray.length-1])});
    };

    return returnArray;
};

console.log(func([1, 2, 3]));
console.log(func([3, 2, 1]));
/*
85. Write a JavaScript code to divide an given array of positive integers into two parts. 
First element goes to first part, second element goes to second part, and third element 
goes to first part and so on. Now compute the sum of two parts and store into an array of size two. 
*/

function func(givenArray){
    let firstStore_Array = new Array();
    let secondStore_Array = new Array();

    for(let i = 0; i < givenArray.length; i++){
        if(i % 2 == 0){
            firstStore_Array.push(givenArray[i]);
        }else if(i % 2 !== 0){
            secondStore_Array.push(givenArray[i]);
        };
    };

    let returnArray = new Array();
    let firstSum = 0; let secondSum = 0;
    
    firstStore_Array.forEach(element => {
        firstSum += eval(element);
    });
    secondStore_Array.forEach(element => {
        secondSum += eval(element);
    });

    returnArray.push(firstSum); returnArray.push(secondSum);

    return returnArray;
};

console.log(func([1, 2, 3, 4]));
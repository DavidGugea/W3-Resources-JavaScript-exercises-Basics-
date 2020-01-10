/*
131. Write a JavaScript program to create an array of prefix sums of the given array. 
Go to the editor
In computer science, the prefix sum, cumulative sum, inclusive scan, or simply scan of a 
sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., the 
sums of prefixes of the input sequence:
y0 = x0
y1 = x0 + x1
y2 = x0 + x1+ x2
...
*/

function func(givenArray){
    let returnArray = [givenArray[0]];
    for(let i = 1; i < givenArray.length; i++){
        let sumCounter = 0;
        for(let j = 0; j <= i; j++){
            console.log(givenArray[j]);
            sumCounter += givenArray[j];
        };
        console.log(" ");
        returnArray.push(sumCounter);
    };
    return returnArray;
};

console.log(func([1, 2, 3, 4, 5]));
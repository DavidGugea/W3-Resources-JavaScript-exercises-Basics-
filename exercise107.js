/*
107. Write a JavaScript program to find the number of sorted pairs
formed by its elements of an given array of integers such that one element in the pair
is divisible by the other one. Go to the editor
For example - 
The output of [1, 3, 2] ->2 - (1,3), (1,2).
The output of [2, 4, 6] -> 2 - (2,4), (2,6)
The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
*/

function func(givenArray, num){
    let returnArray = new Array();
    for(let MAIN_INDEX = 0; MAIN_INDEX < givenArray.length; MAIN_INDEX++){
        if(returnArray.length !== num){
            for(let SECONDARY_INDEX = 0; SECONDARY_INDEX < givenArray.length; SECONDARY_INDEX++){
                if(givenArray[MAIN_INDEX] !== givenArray[SECONDARY_INDEX]){
                    if(givenArray[MAIN_INDEX] % givenArray[SECONDARY_INDEX] === 0){
                        returnArray.push([
                            givenArray[MAIN_INDEX],
                            givenArray[SECONDARY_INDEX]
                        ].reverse());
                    };
                };
            };
        };
    };
    return returnArray;
};

console.log(func([1, 3, 2], 2));
console.log(func([2, 4, 6], 2));
console.log(func([2, 4, 16], 3));
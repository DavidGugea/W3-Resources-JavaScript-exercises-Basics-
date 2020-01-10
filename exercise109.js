/*
109. Write a JavaScript program to sort an array of all prime numbers between 1 and a
given integer.
*/

function func(givenInteger){
    let returnArray = new Array();
    for(let i = 2; i < givenInteger; i++){
        let divisibleCounter = 0;
        for(let j = 1; j <= i; j++){
            if(i % j == 0){
                divisibleCounter++;
            }
        }
        if(divisibleCounter === 2){
            returnArray.push(i);
        };
    };

    return returnArray;
};

console.log(func(5));
console.log(func(11));
console.log(func(19));
/*
118. Write a JavaScript program to check if a given number is in a given range.
*/

function func(startRange, stopRange, stepRange, number){
    let rangeArray = new Array();
    for(let i = startRange; i <= stopRange; i += stepRange){
        rangeArray.push(i);
    }
    console.log(rangeArray);
    if(rangeArray.includes(number)){
        return true;
    }else{
        return false;
    };
};

console.log(func(1, 10, 3, 4));
console.log(func(1, 10, 5, 2));
console.log(func(1, 10, 5, 10));
console.log(func(1, 10, 2, 8));
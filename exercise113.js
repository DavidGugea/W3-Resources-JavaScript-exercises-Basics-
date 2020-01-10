/*
113. Write a JavaScript program to calculate the sum n + n/2 + n/4 + n/8 + .... 
where n is a positive integer and all divisions are integer. 
*/

function func(givenNumber){
    let counter = 0;
    for(let i = 0; Math.pow(2, i) <= givenNumber; i++){
        if(givenNumber % Math.pow(2, i) == 0){
            counter++;
        }else{
            break;
        };
    };

    let returnSum = givenNumber;
    for(let i = 1; i < counter; i++){
        returnSum += givenNumber / Math.pow(2, i);
    };
    return returnSum;
};

console.log(func(8));
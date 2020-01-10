/*
17. Write a JavaScript program to compute the absolute difference between a specified number and 19. 
Returns triple their absolute difference if the specified number is greater than 19.
*/
function func(givenNumber){
    if(givenNumber <= 19){
        return (givenNumber-19);
    }else if(givenNumber > 19){
        return 3*(Math.abs(givenNumber-19));
    };
};

let space = (spaces) => {
    for(let i = 1; i <= spaces; i++){
        console.log(" ");
    };
};

console.log(func(5));
console.log(func(10));
console.log(func(15));
space(10);
console.log(func(20));
console.log(func(26));
console.log(func(34));
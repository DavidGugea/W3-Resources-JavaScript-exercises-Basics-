/*
15. Write a JavaScript program to get the difference between a given 
number and 13, if the number is greater than 13 return double the absolute difference.  
*/
function func(givenNumber){
    if(givenNumber <= 13){
        return givenNumber - 13;
    }else{
        return 2*(Math.abs(givenNumber-13))
    }
}

console.log(func(5));
console.log(func(10));
//
console.log(func(14));
console.log(func(15));
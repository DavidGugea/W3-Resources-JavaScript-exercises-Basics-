/*
105. Write a JavaScript program to find the number of times to replace a
given number with the sum of its digits until it convert to a single digit number.
*/

function func(givenNumber){
    let sumDigits = 0;
    for(let i = 0; i < String(givenNumber).split("").length; i++){
        sumDigits += eval(String(givenNumber).split("")[i]);
    };

    return givenNumber / sumDigits;
}

console.log(func(123));
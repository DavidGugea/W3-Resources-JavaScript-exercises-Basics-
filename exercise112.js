/*
112. Write a JavaScript program to find the number of trailing zeros in the decimal
representation of the factorial of a given number.
*/

function func(givenNumber){
    let factorialNumber = 1;
    for(let i = 1; i <= givenNumber; i++){
        factorialNumber *= i;
    };

    let counter = 0;
    var flag = true;
    String(factorialNumber).split("").reverse().forEach(number => {
        if(number == 0 && flag == true){
            counter++;
        }else{
            flag = false;
        };
    })

    return counter;
};

console.log(func(8));
/*
147. Write a JavaScript program to compute the sum of all digits that occur in a given string.
*/

function func(givenString){
    let return_DigitsCounter = 0;
    for(let i = 0; i < givenString.length; i++){
        let element = givenString.split("")[i];
        try{
            let newElement = eval(element);
            return_DigitsCounter++;
        }catch($_ERROR){
            return_DigitsCounter += 0;
        };
    };
    return return_DigitsCounter;
};

console.log(func("123"));
/*
116. Write a JavaScript program to find all the possible options to replace the hash in a string
(Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. Go to the editor
For a string "2*0", the output should be : ["210", "240", "270"]
*/

function func(givenString){
    let firstNumber = undefined; let secondNumber = undefined;
    for(let i = 0; i < givenString.length; i++){
        if(givenString[i] !== "*" && firstNumber === undefined){
            firstNumber = givenString[i];
        }else if(givenString[i] !== "*" && secondNumber === undefined && firstNumber !== undefined){
            secondNumber = givenString[i];
        };
    };

    let Rest_0 = new Array(0, 3, 9);
    let Rest_1 = new Array(1, 4, 7);
    let Rest_2 = new Array(2, 5, 8);
    let MAIN_3 = new Array(0, 3, 6, 9); let maxValue = undefined;
    let returnArray = new Array();

    for(let i = 0; i < MAIN_3.length; i++){
        if(MAIN_3[i] > (eval(firstNumber) + eval(secondNumber))){
            maxValue = MAIN_3[i];
            break;
        }
    }

    let $_SUM = eval(firstNumber) + eval(secondNumber);
    if((maxValue) % ($_SUM) === 3){
        for(let i = 0; i < Rest_0.length; i++){
            returnArray.push(givenString.replace("*", Rest_0[i]));
        }
    }else if((maxValue) % ($_SUM) === 1){
        for(let i = 0; i < Rest_1.length; i++){
            returnArray.push(givenString.replace("*", Rest_1[i]));
        }
    }else if((maxValue) % ($_SUM) === 2){
        for(let i = 0; i < Rest_2.length; i++){
            returnArray.push(givenString.replace("*", Rest_2[i]));
        }
    };

    return returnArray;
};

console.log(func("4*0")); // 2 0 == > Rest 2 == > 1 0 Rest 1 
console.log(func("4*2"));
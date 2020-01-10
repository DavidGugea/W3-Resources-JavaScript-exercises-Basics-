/*
136. Write a JavaScript program to replace the first digit in a string 
(should contains at least digit) with $ character. 
*/

function func(givenString){
    let returnString = "";
    for(let i = 0; i < givenString.length; i++){
        try{
            let element = eval(givenString[i]);
            if(!returnString.includes("$")){
                returnString += "$"
            }else{
                returnString += givenString[i];
            }
        }catch($_ERROR){
            returnString += givenString[i];
        };
    };

    return returnString;
};

console.log(func("a2b34"));
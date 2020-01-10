/*
65. Write a JavaScript program to test if a string end with "Script". 
The string length must be greater or equal to 6. 
*/

function func(givenString){
    if(givenString.length >= 6){
        if(givenString.substring(givenString.length-6, givenString.length) === "Script"){
            return true;
        }else{
            return false;
        };
    }else{
        return false;
    };
};

console.log(func("Python"));
console.log(func("Java"));
console.log(func("JavaScript"));
console.log(func("Script"));
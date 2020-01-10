/*
114. Write a JavaScript program to check whether a given string represents a correct
sentence or not. A string is considered correct sentence if it starts with the capital letter
and ends with a full stop (.). 
*/

function func(givenString){
    if(givenString[0] === givenString[0].toUpperCase() && givenString.charAt(givenString.length-1) === "."){
        return true;
    }else{
        return false;
    };
};

console.log(func("This tool will help you write better English and efficiently corrects texts."));
console.log(func("This tool will help you write better English and efficiently corrects texts"));
console.log(func("this tool will help you write better English and efficiently corrects texts."));
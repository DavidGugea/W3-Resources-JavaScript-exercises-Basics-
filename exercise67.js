/*
67. Write a JavaScript program to create a new string from a given string, removing the first and 
last characters of the string if the first or last character are 'P'. 
Return the original string if the condition is not satisfied.
*/

function func(givenString){
    // abc
    if(givenString.charAt(0) === "P" && givenString.charAt(givenString.length-1) !== "P"){
        return givenString.substring(1, givenString.length)
    }else if(givenString.charAt(0) !== "P" && givenString.charAt(givenString.length-1) === "P"){
        return givenString.substring(0, givenString.length-1);
    }else if((givenString.charAt(0) === "P" && givenString.charAt(givenString.length-1) === "P")){
        return givenString.substring(1, givenString.length-1);
    }else{
        return givenString;
    };
};

console.log(func("PasdP"));
console.log(func("Pasd"));
console.log(func("asdP"));
console.log(func("asd"));
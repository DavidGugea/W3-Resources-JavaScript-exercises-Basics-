/*
21. Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then return the original string. 
*/
function func(givenString){
    if(givenString[0] + givenString[1] === "Py"){
        // if(givenString.subString(0, 2) === "Py"); !!!!!!@@@@@@
        return givenString;
    }else{
        return ("Py" + givenString);
    }
}

console.log(func("asd"));
console.log(func("BCD"));
console.log(func("Python"));
console.log(func("Pygame"));
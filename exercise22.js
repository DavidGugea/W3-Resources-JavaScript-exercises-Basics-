/*
22. Write a JavaScript program to remove a character at the specified position of a given 
string and return the new string.
*/
function func(givenString, pos){
    let returnString = "";
    let myArray = givenString.split("");
    myArray.splice(pos, 1);
    console.log(myArray);
    for(let i = 0; i<=myArray.length; i++){
        if(myArray[i] !== undefined){
            returnString += myArray[i];
        }
    };

    return returnString;
};

console.log(func("hello", 2));
console.log(func("ASD", 1));
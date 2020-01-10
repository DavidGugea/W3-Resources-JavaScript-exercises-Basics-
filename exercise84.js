/*
84. Write a JavaScript to replace each character of a given string by the next one in the English 
alphabet.  Go to the editor
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
*/

function func(givenString){
    let returnString = ""; // unicode a == 97 // unicode A == 65 //

    for(let i = 0; i < givenString.length; i++){
        switch(givenString[i]){
            case "z":
                returnString += "a";
                break;
            case "Z":
                returnString += "A";
                break;
            default:
                returnString += String.fromCharCode(givenString.charCodeAt(i)+1);
                break;
        };
    };

    return returnString;
};

console.log(func("abcdefghijklmnopqrstuvwxyz"));
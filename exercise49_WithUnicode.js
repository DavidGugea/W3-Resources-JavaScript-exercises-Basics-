/*
49. Write a JavaScript program to replace every character in a given string with the character 
following it in the alphabet. 
*/
// Exercise made using Unicode
// A == > 65
// a == > 97

// arrow function
let space = (spaces) => {
    for(let i = 1; i < spaces; i++){
        console.log(" ");
    };
};

// unicode function
function func(givenString){
    let upperCase_alphabet = new Array();
    let lowerCase_alphabet = new Array();
    for(let i = 65; i < (65+26); i++){
        upperCase_alphabet.push(String.fromCharCode(i));
    };
    for(let i = 97; i < (97+26); i++){
        lowerCase_alphabet.push(String.fromCharCode(i));
    };
    console.log(upperCase_alphabet);
    console.log(lowerCase_alphabet);
    //
    let returnString = "";

    for(let i = 0; i < givenString.length; i++){
        switch(givenString[i]){
            case "Z":
            case "z":
                returnString += String.fromCharCode(givenString.charCodeAt(i));
                break;
            default:
                returnString += String.fromCharCode(givenString.charCodeAt(i)+1);
        };
    };

    console.log(returnString);
};

func("abcdz");
space(10);
func("ABCDW");
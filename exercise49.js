/*
49. Write a JavaScript program to replace every character in a given string with the character 
following it in the alphabet. 
*/
function func(givenString){
    // "use strict";
    let lowerCase_alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let upperCase_alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    console.log(lowerCase_alphabet);
    console.log(upperCase_alphabet);

    let returnString = "";

    for(let i = 0; i <= givenString.length-1; i++){
        /*
        "abc" == > length 3
        "abc"[0] == a
        "abc"[1] == b
        "abc"[2] == 3
        */
        if(lowerCase_alphabet.includes(givenString[i])){
            returnString += lowerCase_alphabet[lowerCase_alphabet.indexOf(givenString[i]) + 1];
        }else if(!lowerCase_alphabet.includes(givenString[i] && upperCase_alphabet.includes(givenString[i]))){
            returnString += upperCase_alphabet[upperCase_alphabet.indexOf(givenString[i]) + 1];
        };
    };

    return returnString;
};

console.log(func("abc"));
console.log(func("abcdefghijklmnopqrstuvwxy"));

/*
w3Resources code: 
----------------------
function string_reverse(str) 
function LetterChanges(text) {
//https://goo.gl/R8gn7u
var s = text.split('');
for (var i = 0; i < s.length; i++) {
// Caesar cipher
switch(s[i]) {
case ' ':
break;
case 'z':
s[i] = 'a';
break;
case 'Z': 
s[i] = 'A';
break;
default:
s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
}

// Upper-case vowels
switch(s[i]) {
case 'a': case 'e': case 'i': case 'o': case 'u':
s[i] = s[i].toUpperCase();
}
}
return s.join('');
}
console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));


----------------------
*/
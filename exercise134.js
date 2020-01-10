/*
134. Write a JavaScript program to change the characters (lower case) in a string 
where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns 
into n, ..., z turns into a.
*/

function func(givenString){
    givenString = givenString.toLowerCase();
    let returnString = "";
    for(let str = 0;  str < givenString.length; str++){
        returnString += String.fromCharCode(122-(givenString.charCodeAt(str)-97));
    };
    return returnString;
};

console.log(func("abc"));
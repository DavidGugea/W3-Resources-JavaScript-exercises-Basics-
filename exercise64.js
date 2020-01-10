/*
64. Write a JavaScript program to concatenate two strings and return the result. 
If the length of the strings are not same then remove the characters from the longer string. 
*/

function func(firstString, secondString){
    if(firstString.length == secondString.length){
        return firstString.concat(secondString);
    }else if(firstString.length > secondString.length){
        return firstString.substring(firstString.length-secondString.length, firstString.length).concat(secondString);
    }else if(firstString.length < secondString.length){
        return secondString.substring(secondString.length - firstString.length, secondString.length).concat(firstString);
    };
};

console.log(func("ab", "cd"));
console.log(func("Python", "JS"));
console.log(func("JS", "Python"));
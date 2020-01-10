/*
99. Write a JavaScript program to check whether it is possible to rearrange characters
of a given string in such way that it will become equal to another given string.
*/

function func(firstString, secondString){
    if(firstString.length == secondString.length){
        if(String(firstString.split("").sort()) == String(secondString.split("").sort())){
            return true;
        }else{
            return false;
        };
    }else{
        return false;
    }
};

console.log(func("abc", "cab"));
console.log(func("ab c", "abc"));
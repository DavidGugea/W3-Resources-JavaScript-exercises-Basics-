/*
53. Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once)
in a given string.
*/

function func(givenString){
    // axxxbxxxx
    // a index == > 0
    // b index == > 4 
    // index + 4 //
    for(let mainCounter = 0; mainCounter <= givenString.length; mainCounter ++){
        switch(givenString[mainCounter]){
            case "a":
                if(givenString[mainCounter+4] == "b"){
                    return true;
                };
                break;
            case "b":
                if(givenString[mainCounter+4] == "a"){
                    return true;
                };
                break;
            default:
                continue;
        };
    };
    return false;
};

console.log(func("axxxb"));
console.log(func("asdab"));
console.log(func("ab"));
console.log(func("oijojiojoijjonjbnjinujbnuijnubnjin")); 
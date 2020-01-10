/*
54. Write a JavaScript program to count the number of vowels in a given string.
*/

function func(givenString){
    let counter = 0;
    for(let i = 0 ; i <= givenString.length; i++){
        if(["a", "e", "i", "o", "u"].includes(givenString[i])){
            counter += 1;
        };
    };

    return counter;
};

console.log(func("aeiouasdoaijojdsofajofiajsdofjasdofajsodfaosfdjoadf"));
console.log(func("qwrtypsdfghjklzxcvbnm"));
console.log(func("aeiou"));
/*
35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character. 
*/
function func(str, char){
    let counter = 0;
    if(str.includes(char)){
        for(let i = 0; i <= str.length; i++){
            if(str[i] == char){
                counter += 1;
            }
        }
    };
    if(counter >= 2 && counter <= 4){
        return true;
    }else{
        return false;
    };
};

console.log(func("aaaa", "a"));
console.log(func("aaaaa", "a"));
console.log(func("aaa", "a"));
console.log(func("aa", "a"));
console.log(func("a", "a"));
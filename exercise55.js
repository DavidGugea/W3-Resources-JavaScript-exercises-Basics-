/*
55. Write a JavaScript program to check if a given string contains equal number of p's and t's present. 
*/

function func(givenString){
    let counter_p = 0; let counter_t = 0;
    for(let i = 0; i <= givenString.length; i++){
        if(givenString[i] === "p"){counter_p += 1}
        else if(givenString[i] === "t"){counter_t += 1};
    };
    if(counter_p === counter_t){return true;}else{return false;};
};

console.log(func("aappttbb"));
console.log(func("tyghuijuygufghvjbhugiyfuvhb"));
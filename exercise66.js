/*
66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank
*/

function func(givenString){
    if(givenString.substring(0, 3) === "Los" || givenString.substring(0, 3) === "New"){
        return givenString;
    }else{
        return undefined;
    };
};

console.log(func("Los Angeles"));
console.log(func("New Jersey"));
console.log(func("Tg.-Jiu"));
console.log(func("California"));
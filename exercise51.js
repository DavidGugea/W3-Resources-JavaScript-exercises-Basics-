/*
51. Write a JavaScript program to convert a given number to hours and minutes.
*/

function func(givenNumber){
    console.log(String(givenNumber/3400).split(" "));
    return String(givenNumber/3400).split(".")[0] + ":" + String(eval(String(givenNumber/3400).split(".")[1])*60);
}


console.log(func(12400));
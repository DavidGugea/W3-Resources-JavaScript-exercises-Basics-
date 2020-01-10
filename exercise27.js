/*
27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise. 
*/

function func(givenString){
    if(givenString.substring(0, 4) == "Java"){
        return true;
    }else{
        return false;
    };
};

console.log(func("Javascript"));
console.log(func("JavaSDAOISDJAOSIDJAOJDIOSAODJASD"));
console.log(func("NotJava"));
console.log(func("aJava"));
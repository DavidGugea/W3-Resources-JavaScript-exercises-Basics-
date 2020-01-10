/*
30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position 
in a given string, if "Script" presents in the string return the string without "Script" 
otherwise return the original one. 
*/
function func(givenString){
    if(!givenString.includes("script")){
        return givenString;
    }else if(givenString.includes("script")){
        if(givenString[5] === "s"){
            // ascripta
            if(givenString.substring(5, 11) === "script"){
                return "script";
            }
        }else{
            return givenString;
        }
    }
};

console.log(func("asd"));
console.log(func("ascripta"));
console.log(func("asdoiajsdsasjdoajsdiajsdioajsdoiajsoiajsdoiajsodscriptasd"));
console.log(func("AAAAAscriptAAAAA"));
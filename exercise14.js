/*
14. Write a JavaScript exercise to get the extension of a filename.  Go to the editor
Click me to see the solution
*/
function returnExtension($string_filename){
    return arguments[0].split(".")[1];
}

console.log(returnExtension("asd.js"))
console.log(returnExtension("asd.py"));
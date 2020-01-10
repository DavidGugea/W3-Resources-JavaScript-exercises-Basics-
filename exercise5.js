/*
5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.  Go to the editor
Click me to see the solution
*/
let string = 'w3resource';
let printString = '';
for(let i = string.length; i>=0; i--){
    if(string[i] !== undefined){
        printString += string[i];
    };
};

console.log(printString);

/*
13. Write a JavaScript exercise to create a variable using a user-defined name.  Go to the editor
Click me to see the solution
*/
var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name])
console.log(this);
console.log(this['abcde']);
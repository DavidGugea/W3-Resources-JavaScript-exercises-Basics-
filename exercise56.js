/*
56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
*/

function division_string(n1, n2) {
  
n1 = 80;
n2 = 6;

var div = Math.round(n1 / n2).toString(),
result_array = div.split("");

if (div >= 1000)
{
for (var i = div.length - 3; i > 0; i -= 3) 
{
result_array.splice(i, 0, ",");
}
result_array;
}
console.log(result_array);
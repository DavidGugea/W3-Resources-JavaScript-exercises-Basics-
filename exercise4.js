/*
4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  Go to the editor
Click me to see the solution
*/
var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
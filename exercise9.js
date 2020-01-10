/*
9. Write a JavaScript program to calculate days left until next Christmas.  Go to the editor
Click me to see the solution
*/
let dateChristmas = new Date(2019, 12, 25);
let dateToday = new Date(2019, 10, 3);
console.log("Days left until Christmas -- > " + (dateChristmas.getTime() - dateToday.getTime())/60000/60/24);
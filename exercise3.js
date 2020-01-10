/*
3. Write a JavaScript program to get the current date.  Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
Click me to see the solution
*/
let newDate = new Date(2019, 10, 3, 15, 55, 30, 30);
console.log(
    newDate.getFullYear() + " / " + newDate.getMonth() + " / " + newDate.getDate()
);
/*
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
let newDate = new Date(2019, 10, 3, 15, 45, 30, 30);
console.log(newDate);
let weekList = new Array("Monday", "Tuesday", "Wednesday", "Thurstday", "Friday", "Saturday", "Sunday");
console.log(" Today is : " + weekList[newDate.getDay()]);
console.log("Current time is : " + newDate.getHours()  + " PM : " + newDate.getMinutes() + " : " + newDate.getSeconds());
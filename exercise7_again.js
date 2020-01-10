/*
7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go to the editor
Click me to see the solution
*/
for(let year = 2014; year<=2050;year++){
    let newDate = new Date(year, -1, 1);
    if(newDate.getDay() === 0){
        console.log("==> " + year);
    }
}
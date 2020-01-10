/*
7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.  Go to the editor
Click me to see the solution
*/
console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
{
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
}
console.log('--------------------');

/*
-------------------- exercise7.js:5:9
1st January is being a Sunday  2017 exercise7.js:10:17
1st January is being a Sunday  2023 exercise7.js:10:17
1st January is being a Sunday  2034 exercise7.js:10:17
1st January is being a Sunday  2040 exercise7.js:10:17
1st January is being a Sunday  2045 exercise7.js:10:17
--------------------
*/
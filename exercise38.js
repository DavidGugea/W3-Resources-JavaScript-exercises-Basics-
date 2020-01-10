/*
38. Write a JavaScript program to check the total marks of a student in various examinations. 
The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the 
examination is "Final-exam." the student will get A+ grade and total marks must be greater 
than or equal to 90. Return true if the student get A+ grade or false otherwise. 
*/

function func(marks, examination){
    if(examination == "Final-exam"){
        return true ? (marks >= 90) : (marks < 90);
    }else if(examination !== "Final-exam"){
        return true ? (marks >= 80 && marks <= 90) : (marks < 80);
    };
};

console.log(func(98));
console.log(func(81));
console.log(func(101, "Final-exam"));
console.log(func(89, "Final-exam"));
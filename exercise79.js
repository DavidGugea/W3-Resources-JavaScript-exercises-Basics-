/*
79. Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. 
The array length should be 0, 1, or 2.
*/

function func(givenArray){
    let counter_30 = 0;
    let counter_40 = 0;
    givenArray.forEach(element => {
        if(element === 30){
            counter_30 += 1;
        }else if(element === 40){
            counter_40 += 1;
        }
    });
};

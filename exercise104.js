/*
104. Write a JavaScript program to find two elements of the array such 
that their absolute difference is not greater than a given integer but is as 
close to the said integer.
*/

function func(firstArray, secondArray, num){
    let returnArray = new Array();
    for(let i = 0; i < firstArray.length; i++){
        for(let j = 0; j < secondArray.length, j++){
            if(Math.abs(firstArray[i] - secondArray[j]) == num)
        }
    }
}


function different_values(ara, n) {
    var max_val = -1;
    for (var i = 0; i < ara.length; i++) {
        for (var j = i + 1; j < ara.length; j++) {
            var x = Math.abs(ara[i] - ara[j]);
            if (x <= n) {
                max_val = Math.max(max_val, x)
            }
        }
    }
    return max_val
}

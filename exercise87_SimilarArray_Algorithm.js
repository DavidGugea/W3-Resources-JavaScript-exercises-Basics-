/*
87. Write a JavaScript program to check whether two arrays of integers of same 
length are similar or not. The arrays will be similar if one array can be obtained
from another array by swapping at most one pair of elements.
*/

function func(firstArray, secondArray){
    if(firstArray.length === secondArray.length){
        var false_Counter = 0;
        /*
            [1, 2, 3, 4]
            [1, 3, 2, 4]

            [1, 2, 3, 4]
            [1, 5, 2, 4]
        */
        for(let i = 0; i < firstArray.length; i++){
            if(!secondArray.includes(firstArray[i])){
                return false;
            }
            if(firstArray[i] !== secondArray[i]){
                false_Counter += 1;
            };
        };
    };
    if(false_Counter > 2 || false_Counter == 1){
        return false;
    }else{
        if(firstArray === secondArray){
            return true;
        }
    };
};

console.log(func([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(func([1, 2, 3, 4, 5], [1, 2, 2, 3, 4]));
console.log(func([1, 2, 3, 4, 5], [1, 3, 2, 4, 5]));

/*
128. Write a JavaScript program to find the smallest round number that is not less 
than a given value. Go to the editor
Note: A round number is informally considered to be an integer that ends with one or more zeros.
[3] So, 590 is rounder than 592, but 590 is less round than 600.
*/

function func(givenArray, minNum){
    function returnZeros(givenNumber){
        let count_zeros = 0;
        for(let i = 0; i < String(givenNumber).split("").length; i++){
            if(String(givenNumber)[i] == 0){
                count_zeros++;
            };
        };
        return count_zeros;
    };

    let myArray = [];
    for(let i = 0 ; i < givenArray.length; i++){
        if(givenArray[i] > minNum){
            myArray.push(givenArray[i]);
        };
    };
    let maxZeros_OBJECT = function(num, zeros){
        this.num = num;
        this.zeros = zeros;
    };
    var maxZeros = new maxZeros_OBJECT(myArray[0], returnZeros(myArray[0]));
    for(let i = 0; i < myArray.length; i++){
        if(returnZeros(myArray[i]) > maxZeros.zeros){
            maxZeros.num = myArray[i];
            maxZeros.zeros = returnZeros(myArray[i]);
        }
    };
    return maxZeros.num;
};

console.log(func([540, 320, 600], 5));
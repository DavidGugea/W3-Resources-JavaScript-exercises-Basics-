/*
115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal 
matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the 
lower right). Go to the editor
Example:
[1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
[1, 0, 0]
[0, 2, 0]
[0, 0, 3]


[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
[1, 0, 0]
[0, 2, 3]
[0, 0, 3]
*/

function func(firstArray, secondArray, thirdArray){ 
    let mainArray = new Array();
    for(let i = 0; i < firstArray.length; i++){
        mainArray.push(firstArray[i]);
    };
    for(let i = 0; i < secondArray.length; i++){
        mainArray.push(secondArray[i]);
    };
    for(let i = 0; i < thirdArray.length; i++){
        mainArray.push(thirdArray[i]);
    };

    $_0_counter = 0;
    for(let i = 0; i < mainArray.length; i++){
        if(mainArray[i] === 0){
            $_0_counter++;
        };
    };

    if($_0_counter === 6 && mainArray[0] !== 0 && mainArray[4] !== 0 && mainArray[mainArray.length-1] !== 0){
        return true;
    }else{
        return false;
    };
};

console.log(func([1, 0, 0], [0, 2, 0], [0, 0, 3]));
console.log(func([1, 0, 0], [0, 2, 3], [0, 0, 3]));
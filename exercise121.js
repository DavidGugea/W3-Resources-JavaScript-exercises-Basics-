/*
121. Write a JavaScript program to check if a given matrix is lower triangular or not. 
Go to the editor
Note: A square matrix is called lower triangular if all the entries above the main diagonal 
are zero.

[[1, 0, 0],[2, 0, 0], [0, 3, 3]] == > true
[1, 0, 0] [1, 0, 0, 0, 0]
[2, 0, 0] [1, 2, 0, 0, 0]
[0, 3, 3] [1, 2, 3, 0, 0]

[[1, 0, 1],[2, 0, 0], [0, 3, 3]] == > false
[1, 0, 1]
[2, 0, 0]
[0, 3, 3]
*/

function func(givenMatrix){
    let lowerTriangular = new Array();
    for(let i = 0; i < givenMatrix.length; i++){
        for(let j = i; j < givenMatrix[i].length; j++){
            lowerTriangular.push(givenMatrix[i][j]);
        };
    };
    lowerTriangular.shift(); lowerTriangular.splice(lowerTriangular.length-1, 1);

    let lowerTriangularFlag = true;
    for(let i = 0; i < lowerTriangular.length; i++){
        if(lowerTriangular[i] !== 0){
            lowerTriangular = false;
        };
    };

    if(lowerTriangular){
        return true;
    }else{
        return false;
    }
};

console.log(func([[1, 0, 0],[2, 0, 0], [0, 3, 3]]));
console.log(func([[1, 0, 1],[2, 0, 0], [0, 3, 3]]));
/*
117. Write a JavaScript program to check if a given matrix is an identity matrix. Go to the editor
Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n 
square matrix with ones on the main diagonal and zeros elsewhere.
[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
[1, 0, 0]
[o, 1, 0]
[0, 0, 1]
[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
[1, 0, 0]
[0, 1, 0]
[1, 0, 1]
*/

function func(givenMatrix){
    let c_DiagonalCounter = 0;
    let returnDiagonal = [];
    let flagMatrix = true;

    for(let i = 0; i < givenMatrix.length; i++){
        returnDiagonal.push(givenMatrix[i][c_DiagonalCounter]);
        for(let j = 0; j < givenMatrix[i].length; j++){
            if(givenMatrix[i][j] !== 0 && j !== c_DiagonalCounter){
                flagMatrix = false;
            }
        }
        c_DiagonalCounter++; // increment increase //
    };

    let flag_Diagonal = true;
    for(let i = 0; i < returnDiagonal.length; i++){
        if(returnDiagonal[i] !== 1){
            flag_Diagonal = false;
        };
    };

    console.log(`flag_Diagonal == > ${flag_Diagonal}`);
    console.log(`returnDiagonal == > ${returnDiagonal}`);

    if(flagMatrix && flag_Diagonal){
        return true;
    }else{
        return false;
    }
};

console.log(func([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
console.log(func([[1, 0, 0], [0, 1, 0], [1, 0, 1]]));
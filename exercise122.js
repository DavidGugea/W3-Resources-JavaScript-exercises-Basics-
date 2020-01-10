/*
122. Write a JavaScript program to check whether a given array of integers represents either
a strictly increasing or a strictly decreasing sequence.
*/

function func(givenArray){
    let strictlyIncrease = false; let strictlyDecrease = false;

    let checkArray = new Array();

    let flagPossibleDecrease = false;
    let flagPossibleIncrease = false;

    if(givenArray[0] < givenArray[givenArray.length - 1]){
        flagPossibleIncrease = true;
        flagPossibleDecrease = false;
    }else if(givenArray[0] > givenArray[givenArray.length - 1]){
        flagPossibleIncrease = false;
        flagPossibleDecrease = true;
    }

    if(flagPossibleIncrease && !flagPossibleDecrease){
        for(let i = givenArray[0]; i <= givenArray[givenArray.length-1]; i++){
            checkArray.push(i);
        };
    }else if(!flagPossibleIncrease && flagPossibleDecrease){
        for(let i = givenArray[0]; i >= givenArray[givenArray.length-1]; i--){
            checkArray.push(i);
        };
    };

    if(checkArray.join("") === givenArray.join("")){
        if(givenArray[0] < givenArray[1]){
            strictlyIncrease = true;
            strictlyDecrease = false;
        }else if(givenArray[0] > givenArray[1]){
            strictlyIncrease = false;
            strictlyDecrease = true;
        };

        if(strictlyIncrease && !strictlyDecrease){
            return "Strictly Increase";
        }else if(!strictlyIncrease && strictlyDecrease){
            return "Strictly Decrease";
        }
    }else{
        return false;
    };
};

console.log(func([1, 2, 3, 4, 5]));
console.log(func([5, 4, 3, 2, 1]));
console.log(func([1, 2, 4, 131131, 1]));
console.log(func([4, 1, -2, 12]));
/*
139. Write a JavaScript program to find the position of a rightmost round number 
in an array of integers. Returns 0 if there are no round number.  Go to the editor
Note: A round number is informally considered to be an integer that ends with one 
or more zeros.
*/
function func(givenArray){
    let reverseIndex = 0;
    for(let i = givenArray.length-1; i >= 0; i--){
        let zerosCounter = 0;
        for(let j = 0; j < String(givenArray[i]).split("").length; j++){
            if(String(givenArray[i]).split("")[j] == "0"){
                zerosCounter++;
            }
        };
        if(zerosCounter >= 1){
            reverseIndex=i;
            break;
        }
    };
    return reverseIndex;
};


console.log(func([1, 22, 30, 54, 56]));
console.log(func([1, 22, 32, 54, 56]));
console.log(func([1, 22, 32, 54, 50]));
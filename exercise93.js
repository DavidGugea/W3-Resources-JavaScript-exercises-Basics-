/*
93. Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers.
*/

function func(givenArray){
    let maximalDifference = 0;
    for(let i = 1; i < givenArray.length; i++){
        let local_maximalDifference = 0;
        for(let j = 0; j <= i; j++){
            if((givenArray[i] - givenArray[j]) > local_maximalDifference){
                local_maximalDifference = (givenArray[i] - givenArray[j]);
            };
        };
        if(local_maximalDifference > maximalDifference){
            maximalDifference = local_maximalDifference;
        }
    };
    
    return maximalDifference;
};

console.log(func([1, 2, 3, 8, 9]));
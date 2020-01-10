/*
91. Write a JavaScript program to find the maximum possible sum of some of its
k consecutive numbers (numbers that follow each other in order.) of 
a given array of positive integers. 

file:///Volumes/INTENSO/David/PROGRAMMING/JavaScript/w3Resources/Basic/index.html
*/

function func(givenArray, k){
    if(k <= givenArray.length){
        let maxSum = 0;
        /*
        [1, 2, 3, 4, 5]   // array.length-k+1;
        */

        for(let i = 1; i <= (givenArray.length-k+1); i++){
            let addSum = 0;
            console.log(`i == > ${i}`);
            console.log(`i+k-1 == > ${i+k-1}`);
            // 2 , 3,  4
            // k = 3
            for(let j = i; j <= (i+k-1); j++){
                console.log(`j == > ${j}`);
                addSum += givenArray[j];
            }
            console.log(" ");

            if(addSum > maxSum){
                maxSum = addSum;
            };
        };
        return maxSum;
    }
};

console.log(func([1, 2, 3, 4, 5, 6], 2));

/*
for(let maxI = 1; maxI <= (givenArray.length-k+1); maxI++){
            
            //console.log(maxI);
            let maxSum_proto = 0;
            for(let i = maxI; i <= (givenArray.length-i); i++){
                maxSum_proto += givenArray[i];
            };
            if(maxSum_proto > maxSum){
                maxSum = maxSum_proto;
            };
        };
*/
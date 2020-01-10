/*
31. Write a JavaScript program to find the largest of three given integers.
*/

function func(){
    // "largest" == > strings
    biggestNumber = String(arguments[0]);
    for(let i = 0; i <= arguments.length; i++){
        if(arguments[i] < 0){
            arguments[i] = Math.abs(arguments[i]) // or argument = (-argument);
        };
        if(String(arguments[i]).length > biggestNumber.length){
            biggestNumber = arguments[i];
        }
    };

    return biggestNumber;
};

console.log(func(1000, 410, 520));
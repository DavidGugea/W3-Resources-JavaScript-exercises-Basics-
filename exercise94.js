/*
94. Write a JavaScript program to find the number which appears most in a given array of integers.
*/
function func(givenArray){
    let maxCounter_OBJECT = function(element, counter){
        this.element = element;
        this.counter = counter;
    };
    let maxCounter = new maxCounter_OBJECT("a", 0);
    for(let i = 0; i < givenArray.length; i++){
        let counter = 0;
        givenArray.forEach(element => {
            if(element === givenArray[i]){
                counter++;
            }
        });
        if(counter > maxCounter.counter){
            maxCounter.element = givenArray[i];
            maxCounter.counter = counter;
        };
    };

    return `${maxCounter.element} < == > ${maxCounter.counter}`;
};

console.log(func([1, 1, 2, 2, 3, 3, 4, 4, 4]));
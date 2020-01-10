function errorMessage(){
    for(let i = 1; i <= 3; i++){
        console.log(" ");
    };

    console.error("Please answer correctly to the question !");
    console.error("Try again !");

    for(let i = 1; i <= 3; i++){
        console.log(" ");
    };
};

var numberOfTries = 0;

while(true){
    let guessNumber = Math.random(1, 10);
    while(true){
        let userGuess = prompt("Print here your number (1-10) == > ");
        try{
            let userGuess = eval(userGuess);
            break
        }catch($ERROR){
            errorMessage();
            continue
        };
    }

    if(userGuess === guessNumber){
        alert("Number guessed, congratulations !");
        break
    }else{
        numberOfTries += 1
        alert(`Wrong number. Number of tries: ${numberOfTries}`);
        continue;
    }
}
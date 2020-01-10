/*
25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple 
of 7.
*/
function func(givenNumber){
    if(givenNumber % 3 == 0 && givenNumber % 7 == 0){
        console.log("Multiple of 3 and multiple of 7");
    }else if(givenNumber % 3 == 0){
        console.log("Multiple of 3");
    }else if(givenNumber % 7 == 0){
        console.log("Multiple of 7");
    }
};

func(3);
func(7);
func(9);
func(14);
func(21);
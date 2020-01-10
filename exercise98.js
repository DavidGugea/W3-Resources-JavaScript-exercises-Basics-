/*
98. Write a JavaScript program to switch case of the minimum possible number of letters to
make a given string written in the upper case or in the lower case. Go to the editor
Fox example "Write" will be write and "PHp" will be "PHP"
*/

function func(givenString){
    let lowerCase_counter = 0; let upperCase_Counter = 0;
    for(let i = 0; i < givenString.length; i++){
        if(givenString[i] === givenString[i].toLowerCase()){
            lowerCase_counter += 1;
        }else if(givenString[i] === givenString[i].toUpperCase()){
            upperCase_Counter += 1;
        };
    };

    if(lowerCase_counter > upperCase_Counter){
        return givenString.toLowerCase();
    }else if(lowerCase_counter < upperCase_Counter){
        return givenString.toUpperCase();
    };
};

console.log(func("Abc"));
console.log(func("aBC"));
/*
23. Write a JavaScript program to create a new string from a given string changing the position 
of first and last characters. The string length must be greater than or equal to 1.
*/
let space = (spaces) => {
    for(let i = 1; i <= spaces; i++){
        console.log(" ");
    }
}
function func(givenString){
    if(givenString.length >= 1){
        let givenString_$SUBSTRING$ = givenString.substring(1, givenString.length-1);
        console.log(givenString);
        myArray = givenString_$SUBSTRING$.split("");
        myArray.push(givenString[0]);
        myArray.unshift(givenString[givenString.length-1]);

        var returnString = "";
        for(let i = 0; i <= myArray.length; i++){
            if(myArray[i] !== undefined){
                returnString += myArray[i];
            }
        };
    };

    return returnString;
};

console.log(func("AaaaB"));
space(10);

/*
function first_last(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));
*/
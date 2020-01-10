/*
10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).  Go to the editor
Click me to see the solution
*/
document.getElementById("multiply_Button").addEventListener("click", function(e){
    document.getElementById("result").textContent = document.getElementById("firstNumber").value * document.getElementById("secondNumber").value
},
false);
//\\
document.getElementById("divide_Button").addEventListener("click", function(e){
    document.getElementById("result").textContent = document.getElementById("firstNumber").value / document.getElementById("secondNumber").value;
},
false);
//\\
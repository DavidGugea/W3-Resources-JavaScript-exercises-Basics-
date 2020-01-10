/*
11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/
function CelsiusToFahrenheit(Celsius){
    //c/5 = (f-32)/9 
    console.log((Celsius/5)*9+32);
};
function FahrenheitToCelsius(Fahrenheit){
    //c/5 = (f-32)/9 
    console.log((Fahrenheit-32)/9*5);
};
CelsiusToFahrenheit(60);
FahrenheitToCelsius(45);
/*
108. Write a JavaScript program to create the dot products of two given 3D vectors. 
Go to the editor
Note: The dot product is the sum of the products of the corresponding entries of the 
two sequences of numbers.
*/

function func(firstVECTOR, secondVECTOR) {
  var result = 0;
  for (var i = 0; i < 3; i++) {
    result += firstVECTOR[i] * secondVECTOR[i];
  }
  return result;
}
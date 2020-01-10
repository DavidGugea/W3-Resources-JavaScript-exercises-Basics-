/*
127. Write a JavaScript program to reverse the order of the bits in a given integer. 
Go to the editor
56 -> 111000 after reverse 7 -> 111
234 -> 11101010 after reverse 87 -> 1010111
*/

function func(n) {
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}
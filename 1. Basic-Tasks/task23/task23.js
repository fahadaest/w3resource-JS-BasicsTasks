// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.  

let Str = "fahad";
let arr = Str.split("");
let first = arr[0];
let last = arr[arr.length - 1];
arr[0] = last;
arr[arr.length - 1] = first;
let result = arr.join("");
console.log(result);
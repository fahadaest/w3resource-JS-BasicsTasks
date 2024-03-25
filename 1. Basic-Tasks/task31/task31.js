// Write a JavaScript program to find the largest of three given integers. 

let num1 = 20;
let num2 = 30;
let num3 = 90;
let largest = num1;
if (num2 > largest) {
  largest = num2;
}
if (num3 > largest) {
  largest = num3;
}
console.log(largest);
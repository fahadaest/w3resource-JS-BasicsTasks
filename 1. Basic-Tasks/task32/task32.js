// Write a JavaScript program to find the closest value to 100 from two numerical values

let num1 = 10;
let num2 = 20;
let dif1 = 100 - num1;
let dif2 = 100 - num2;
let closestNum;
if (dif1 < dif2) {
  closestNum = num1;
} else {
  closestNum = num2;
}
console.log(closestNum);
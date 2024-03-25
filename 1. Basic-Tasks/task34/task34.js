// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  

let num1 = 40;
let num2 = 50;
if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
} else {
  console.log("Number not in range");
}
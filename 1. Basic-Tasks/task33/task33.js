// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.


let num1 = 40;
let num2 = 70;

if ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) {
  if ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100)) {
    console.log("Numbers are in range");
  }
  else {
    console.log("Numbers are not in range");
  }
}
else {
  console.log("Numbers are not in range");
}

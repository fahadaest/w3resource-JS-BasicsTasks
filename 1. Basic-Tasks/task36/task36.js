// Write a JavaScript program that checks whether the last digit of three positive integers is the same

let num1 = 2;
let num2 = 225;
let num3 = 32;
if (num1 > 0 && num2 > 0 && num3 > 0) {
  let last1 = num1 % 10;
  let last2 = num2 % 10;
  let last3 = num3 % 10;
  if (last1 == last2 && last2 == last3) {
    console.log("Digits are same");
  } 
  else {
    console.log("Last Digits are not same");
  }
}
// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50

function checkPair(num1, num2) {
  let sum = num1 + num2;
  if (num1 === 50 || num2 === 50 || sum === 50) {
    return true;
  } 
  else {
    return false;
  }
}
console.log(checkPair(25, 25));
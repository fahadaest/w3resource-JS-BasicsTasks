// Write a JavaScript program to check two given integers whether one is positive and another one is negative. 

function checkNumbers(num1, num2) {
  if (num1 > 0 && num2 < 0) {
    console.log("Second number is negative");
  } 
  else if (num1 < 0 && num2 > 0) {
    console.log("First number is negative");
  } 
  else {
    console.log("Both numbers are positive");
  }
}

checkNumbers(10, -20);
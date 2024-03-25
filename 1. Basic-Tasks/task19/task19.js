// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function checkInteger(num) {
  if (num >= 80 && num <= 120) {
    console.log("Number is within 20 of 100");
  } 
  else if (num >= 380 && num <= 420) {
    console.log("Number is within 20 of 400");
  }
}

console.log(checkInteger(90));
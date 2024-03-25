// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 

let num1 = 20;
let num2 = 12;
let sum = num1 + num2;
let difference;
if(num1 > num2){
  difference = num1 - num2; 
  if( num1 == 8 || num2 == 8 || sum == 8 || difference == 8){
    console.log("One of them is 8");
  }
  else{
    console.log("None of them is 8");
  }
}
else if(num2 > num1){
  difference = num2 - num1;
  if( num1 == 8 || num2 == 8 || sum == 8 || difference == 8){
    console.log("One of them is 8");
  }
  else{
    console.log("None of them is 8");
  }
}
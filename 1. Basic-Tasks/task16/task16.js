// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 

let num1 = 3;
let num2 = 3;

function calculateSum(){
    if( num1 === num2){
        return (num1 + num2) * 3; 
    }
    else{
        return num1 + num2;
    }
}

console.log(calculateSum());
// Write a JavaScript conditional statement to find the largest of five numbers

var num1 = 4;
var num2 = 23;
var num3 = 54;
var num4 = 2;
var num5 = -2;

if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    console.log(num1);
}
else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    console.log(num2)
}
else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
    console.log(num3)
}
else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
    console.log(num4)
}
else{
    console.log(num5)
}
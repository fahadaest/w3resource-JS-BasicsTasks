// Write a JavaScript program to swap two halves of a given array of integers of even length

let num = [1,2,3,4,5,6,7,8];
let numLen = num.length;

if(numLen % 2 == 0){
    let half = numLen/2;
    let result = [];
    let firstHalf = num.slice(0,half);
    let secondHalf = num.slice(half);
    result = secondHalf + "," + firstHalf;
    console.log(result);
}
else{
    console.log("Array is odd, can't split in half :(");
}

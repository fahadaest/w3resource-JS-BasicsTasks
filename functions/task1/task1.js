// Write a JavaScript function that reverses a number.

function reverseNumber(num){
    let str = num.toString();
    let reversed = str.split("").reverse().join("");
    let result = parseInt(reversed);
    console.log(result);   
}

console.log(reverseNumber(1234));
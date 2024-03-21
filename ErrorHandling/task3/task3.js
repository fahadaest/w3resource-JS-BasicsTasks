// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero

function acceptNumbers(num1, num2){
    if(num2 == 0){
        throw new Error("second number is zero");
    }
    else{
        console.log("Numbers accepted");
    }
}

try{
    acceptNumbers(2,0);
}
catch(error){
    console.error(error.message);
}
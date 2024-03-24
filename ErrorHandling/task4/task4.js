// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.


function checkNegative(num){
    if(num < 0){
        throw new Error("Number is negative");
    }
    else{
        console.log("number is positive");
    }
}

try{
    checkNegative(-1);
}
catch(error){
    console.error(error.message);
}
// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function checkIfInteger(num){
    if (Number.isInteger(num)){
        console.log("Number is integer");
    }
    if(!Number.isInteger(num)){
        throw new Error("Number is not integer")
    }
}

try{
    checkIfInteger(1.2);
}
catch (error){
    console.error(error.message);
}
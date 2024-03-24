// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion

function checkPrime(num){
    let divisor = 0;
    if(num == 1){
        console.log("Number is not a prime number");
    }
    if(num == 2){
        console.log("its a prime number")
    }
    else{
        for (let i = 1; i <= num; i++){
            if(num % i === 0){
                divisor += 1;
            }
        }
        if(divisor == 2){
            console.log("Number is a prime number")
        }
        else{
            console.log("Not a prime number")
        }
    }
}
console.log(checkPrime(7));
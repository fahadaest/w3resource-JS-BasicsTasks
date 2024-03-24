// Write a JavaScript program to calculate the factorial of a number. 

function factorial(number) {
    if (number <= 0) {
        return "Enter a number above 0";
    }
    else if (number == 1) {
        return 1;
    }
    else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorial(4));
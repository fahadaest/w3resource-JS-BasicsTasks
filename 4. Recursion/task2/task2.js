// Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion

function gcd(a, b) {
    if (b == 0) {
        return a;
    } 
    else {
        return gcd(b, a % b);
    }
}

console.log(gcd(101, 200));
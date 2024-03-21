// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  

function celsiusToFahrenheit(celsius) {
    console.log(celsius + " degrees Celsius is equal to " + ((celsius * 9 / 5) + 32) + " degrees Fahrenheit.");
}

function fahrenheitToCelsius(fahrenheit) {
    console.log(fahrenheit + " degrees Fahrenheit is equal to " + (fahrenheit - 32) * 5 / 9 + " degrees Celsius.");

}

console.log(celsiusToFahrenheit(50));
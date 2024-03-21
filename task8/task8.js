// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

const randomNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

if (userGuess === randomNumber) {
    document.getElementById("result").innerHTML = "Good Work!";
} else {
    document.getElementById("result").innerHTML = "Not matched, The correct number was: " + randomNumber;
}
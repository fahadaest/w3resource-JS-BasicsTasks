// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(str) {
    let letters = str.split('');
    let vowels = 0;
    for (let i = 0; i < letters.length; i++) {
        if(letters[i] == "a" || letters[i] == "e" || letters[i] == "i" || letters[i] == "o" || letters[i] == "u"){
            vowels += 1;
        }
    }
    return vowels;
}
console.log(countVowels("aeiou"));
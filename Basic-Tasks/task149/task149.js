// Write a JavaScript program to change the capitalization of all letters in a given string.  

function changeCapitalization(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } 
        else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(changeCapitalization("Bcdf"));
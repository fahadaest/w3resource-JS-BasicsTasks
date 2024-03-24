// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

function uppercase(str) {

    let wordArray = str.split(' ');
    let result = [];

    console.log(wordArray);

    for (let i = 0; i < wordArray.length; i++) {
        let firstUpperCase = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1)
        result.push(firstUpperCase);
    }

    return result.join(' ');
}


console.log(uppercase("the quick brown fox")); 
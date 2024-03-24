// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.


function findLongestWord(str){
    let words = str.split(' ');
    let longestWord = '';
    let maxLength = 0;

    for( let i = 0; i < words.length ; i++){

        if(words[i].length>maxLength){
            longestWord = words[i];
            maxLength = words[i].length;
        }

    }
    return longestWord;
}

console.log(findLongestWord("this is the 6th task of javascript functionsss"));
// Write a JavaScript function that checks whether a passed string is a palindrome or not?


function checkIfPalindrome(str) {
    const cleanStr = str.toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    if(reversedStr == str){
        console.log("String is palindrome")
    }
    else{
        console.log("String is not palindrome");
    }
}

console.log(checkIfPalindrome("neven"))
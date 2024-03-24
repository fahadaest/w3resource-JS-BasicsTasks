// Write a JavaScript function that returns a string that has letters in alphabetical order

function sortStr(str){
    return str.split('').sort().join('');

}

console.log(sortStr("dsba"));
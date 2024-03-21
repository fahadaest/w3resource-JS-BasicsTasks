// Write a JavaScript program to compute the sum of all the digits that occur in a given string. 

function sum(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (!isNaN(parseInt(char))) {
            result += parseInt(char);
        }
    }
    return result;
}
console.log(sum("Hello123World456"));
// Write a JavaScript function that generates all combinations of a string.

function generateCombination(str) {

    let result = [];

    function backtrack(combination, index) {
        result.push(combination);

        for (let i = index; i < str.length; i++) {
            backtrack(combination + str[i], i + 1);
        }
    }
    backtrack("", 0);

    return result;
}

console.log(generateCombination("abc"));
// Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

try {
    let invalidJSON = '{ "name": "John", "age": }';
    let parsedJSON = JSON.parse(invalidJSON);
    console.log(parsedJSON);
} catch (error) {
    console.error(error.message);
}
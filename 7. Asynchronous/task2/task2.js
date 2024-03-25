// Write a JavaScript program that converts a callback-based function to a Promise-based function.

function callbackFunction(callback) {
    setTimeout(() => {
        callback(null, 'Hello, world!');
    }, 1000);
}

function promiseFunction() {
    return new Promise((resolve, reject) => {
        callbackFunction((error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

promiseFunction()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
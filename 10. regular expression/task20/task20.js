// Write a JavaScript function to check if a given value contains alpha, a dash and an underscore.

function checkIfAlphaDashUnderscore(str){
    regularExpression = /^[a-z0-9_\-]+$/i;

    if (regularExpression.test(str))
      {
        console.log("Given value contains alpha, dash and underscore");
      }
    else
      {
        console.log("Value does not contains alpha, dash and underscore");
      }
}
console.log(checkIfAlphaDashUnderscore("1_00"))
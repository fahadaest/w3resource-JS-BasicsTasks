// Write a JavaScript exercise to create a variable using a user-defined name. 

var userDefinedVariable = "myVariable";
var number = 27;
this[userDefinedVariable] = number;
console.log(this[userDefinedVariable]);
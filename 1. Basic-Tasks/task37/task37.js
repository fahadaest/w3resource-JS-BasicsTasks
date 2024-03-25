// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string.If the string length is less than 3 convert all the characters to upper case.

let str = "FAhad";
if (str.length > 3) {
  let char = str.substring(0, 3).toLowerCase();
  console.log(char + str.substring(3));
} else {
  console.log(str.toUpperCase());
}
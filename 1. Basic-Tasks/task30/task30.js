// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one

let str = "absfscript";
let index = str.indexOf("script");
console.log(index);
if (index == 4) {
  let result = str.slice(0, 4) + str.slice(10);
  console.log(result);
} else {
  console.log(str);
}
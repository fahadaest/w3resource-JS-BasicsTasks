// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

let str = "fah";
if (str.length >= 3) {
  let last = str.slice(-3);
  let newStr = last + str + last;
  console.log(newStr);
}
else{
  console.log("Enter a string greater than 3")
}
// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

let str = "fahad";
let char = "f";
if (str.length >= 4) {
  let charAtIndex2 = str.charAt(1);
  let charAtIndex3 = str.charAt(2);
  let charAtIndex4 = str.charAt(3);
  if (
    char === charAtIndex2 || char === charAtIndex3 || char === charAtIndex4) {
    console.log("Character exists between 2nd and 4th position");
  } 
  else {
    console.log("Character doesn't exists between 2nd and 4th position");
  }
} 
else {
  console.log("String length is smaller than 4");
}
// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removeCharacter(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
}
console.log(removeCharacter("abcdefghijkl", 2));
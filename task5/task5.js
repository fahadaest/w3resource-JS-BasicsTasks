// Write a JavaScript program to rotate the string 'w3resource' in the right direction.This is done by periodically removing one letter from the string end and attaching it to the front.



function rotateString() {
    let str = document.getElementById("inputString").textContent;
    let arr = str.split("");
    let lastVal = arr.pop();
    arr.unshift(lastVal);
    let rotatedStr = arr.join("");
    document.getElementById("inputString").innerHTML = rotatedStr;
}

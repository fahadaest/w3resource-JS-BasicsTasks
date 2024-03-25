// Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.


var David = 80;
var Vinoth = 77;
var Divya = 88;
var Ishitha = 95;
var Thomas = 68;

var avg = (David + Vinoth + Divya + Ishitha + Thomas) / 5;

if (avg < 60) {
    console.log("Grade: F");
}
else if (avg < 70) {
    console.log("Grade: D");
}
else if (avg < 80) {
    console.log("Grade: C");
}
else if (avg < 90) {
    console.log("Grade: B");
}
else if (avg <= 100) {
    console.log("Grade: A");
} 
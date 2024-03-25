// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results

var a = 3;
var b = 2;
var c = 1;

if (a > b && a > c) {
    if (b > c) {
        alert(a + " , " + b + " , " + c)
    }
    else {
        alert(a + " , " + c + " , " + b)
    }
}
else if (b > a && b > c) {
    if (a > c) {
        alert(b + " , " + a + " , " + c)
    }
    else {
        alert(b + " , " + c + " , " + a)
    }
}
else if (c > a && c > b) {
    if (b > a) {
        alert(c + " , " + b + " , " + a)
    }
    else {
        alert(c + " , " + a + " , " + b)
    }
}
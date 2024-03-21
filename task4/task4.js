// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

var side1 = 5;
var side2 = 6;
var side3 = 7;

// to calculate area of traingle with 3 sides given, we first need to calculate the perimeter
var perimeter = (side1 + side2 + side3)/2

// Now the formula to calculate area is A = √[s(s-a)(s-b)(s-c)]
var area = Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3))

console.log(area);
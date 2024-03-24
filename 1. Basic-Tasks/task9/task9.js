// Write a JavaScript program to calculate the days left before Christmas.  

const today = new Date();

const currentYear = today.getFullYear();

const christmasDate = new Date(currentYear, 11, 25); // Month index starts from 0 (0 for January, 11 for December)

const differenceMs = christmasDate - today;

const daysLeft = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));



console.log("Days left are: " + daysLeft);

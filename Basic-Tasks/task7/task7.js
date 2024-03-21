// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

let startYear = 2014;
let endYear = 2050;

for ( i = startYear; i <= endYear; i++){
    let firstJanuary = new Date(i, 0, 1);

    if (firstJanuary.getDay() === 0){
        console.log("first January of " + i + " is on Sunday");
    }
}
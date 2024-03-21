// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var dateAndTime = new Date();
var date = dateAndTime.getDate();
var month = dateAndTime.getMonth() + 1;
var year = dateAndTime.getFullYear();

if(date < 10){
    date = "0" + date;
}
if(month < 10){
    month = "0" + month;
}

console.log(month + "-" + date + "-" + year);
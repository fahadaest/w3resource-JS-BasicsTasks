// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var dateAndTime = new Date();
var day = dateAndTime.getDay();
var hours = dateAndTime.getHours();
var minutes = dateAndTime.getMinutes();
var seconds = dateAndTime.getSeconds();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

if(hours <= 11){
    value = "AM";
}
if(hours >= 12){
    value = "PM";
}

console.log("Today is: " + weekDays[day] );
console.log("Current time is: " + hours + " " + value + " : " + minutes + " : " + seconds);

function checkIfLeapYear() {
    let yearValue = document.getElementById("year").value;
    console.log(yearValue);

    if (yearValue % 4 === 0) {
        if (yearValue % 100 === 0) {
            if (yearValue % 400 === 0) {
                document.getElementById("result").innerHTML="This is a leap Year";
            }
            else {
                ocument.getElementById("result").innerHTML="This is not a leap Year";
            }
        }
        else {
            document.getElementById("result").innerHTML="This is a leap Year";
        }
    }
    else {
        document.getElementById("result").innerHTML="This is a not leap Year";
    }
}
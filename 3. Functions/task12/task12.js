// Write a JavaScript function that checks whether a number is perfect

function checkPerfectNumber(number) {
    if (number <= 1) {
        console.log("Number is not perfect")
    }
    else if(number % 2 != 0){
        console.log("Number is not perfect")
    }
    else if(number % 2 == 0){
        let half = number / 2;
        let result = 0;
        for ( i = 1; i <= half; i ++){
            if (number % i == 0 ){
                result += i;               
            }
        }
        if(result == number){
            console.log("Number is perfect");
        }
        else{
            console.log("Number is not perfect");
        }
    }
}
console.log(checkPerfectNumber(28));
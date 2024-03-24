// Write a JavaScript function to compute the factors of a positive integer.


function computeFactore(num){
    let arr = [];
    if(num <= 0){
        console.log("Please Enter positive number or a number greater than 0")
    }
    else{
        for( i =1; 1 <= num ; i++){
            if(num % i == 0){
                console.log(i);
            }   
        }
    }
}

console.log(computeFactore(10));
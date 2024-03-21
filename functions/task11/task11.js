// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

function find2ndLargestAnd2ndSmallest(num){

    let arr = num.sort((a,b) => a-b);
    console.log("second Lowest : " + arr[1]);
    console.log("second greatest : " + arr[arr.length -2]);
}

let numbers = [3, 1, 5, 2, 4]
console.log(find2ndLargestAnd2ndSmallest(numbers))

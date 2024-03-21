//  Swap pairs of adjacent digits of a given integer of even length

function swapPairs(num){
    let numStr = num.toString();
    let swapped = "";
    let result = "";
    let finalResult;
    if (numStr.length % 2 != 0 ){
        console.log("Given digits in not even numbers");
    }
    else{
        for ( let i = 0; i < numStr.length; i += 2){
            swapped = numStr[i+1] + numStr[i];
            result += swapped;
        }
        
    }
    console.log(result);

}

console.log(swapPairs(234993));
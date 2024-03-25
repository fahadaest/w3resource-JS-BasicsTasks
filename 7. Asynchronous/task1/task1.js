// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function twoSecDelay(str){
    setTimeout(str, 2000);
}

function output(){
    console.log("Callback Invoked after 2 sec");
}

twoSecDelay(output);
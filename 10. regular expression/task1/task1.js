// Write a JavaScript program to test whether the first character of a string is uppercase or no

function checkUppercase(str){
    const upperCaseReg = /[A-Z]/g;
    if(upperCaseReg.test(str)){
        console.log("First character is uppercase");
    }
    else{
        console.log("First Character is not uppercase");
    }
}
console.log(checkUppercase("fahad"));
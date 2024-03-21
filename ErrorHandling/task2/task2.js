// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object



try{
    let undefinedVar = undefined;
    console.log(undefinedVar.property);
}
catch (error){
    console.error(error.message);
}
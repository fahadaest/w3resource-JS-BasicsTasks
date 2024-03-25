const button = document.createElement('button');
button.textContent = "Click to display";
document.body.appendChild(button);

button.addEventListener('click', display);

function display(){
    console.log("Button Clicked!");
}
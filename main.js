//MAIN FUNCTION 
function changeBg () {
    //making a random number value from 0 to 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    //storing the values in a constant
    const randomColor = "rgb(" + r + "," + g + "," + b + ")";

    //making a variable that will get the HTML body element
    let bodyStyle = document.body;
    //style that body element with the constant that has the random RGB value stored in it
    bodyStyle.style.background = randomColor;
}

//LOADING FUNCTION
function loadHandler() {
    //making a constant that will get the button element in HTML
    const mainButton = document.getElementById("background_button");
    //adding an eventListener to that the button executes the MAIN FUNCTION
    mainButton.addEventListener("click", changeBg);
}

//LOADING EVERYTHING TO THE WINDOW
window.addEventListener("load", loadHandler);

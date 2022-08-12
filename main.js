function changeBg () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const randomColor = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.background = randomColor;
}

function loadHandler() {
    const mainButton = document.getElementById("background_button");
    mainButton.addEventListener("click", changeBg);
}



window.addEventListener("load", loadHandler);

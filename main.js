const container = document.querySelector(".container");

function paintBackground(){
   
    const image = new Image();
    image.src = `image/cinema.jpg`;
    image.classList.add("bgImage");
    
    container.appendChild(image);
}

function init(){
    paintBackground();
}

init();
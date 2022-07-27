let start = document.querySelector("#start");

let winScreen = document.querySelector("#win");

let leftSide = document.querySelector(".left");
let rightSide = document.querySelector(".right")
let boatDiv = document.querySelector(".boatDiv");

let sheep = document.createElement("img");
let wolf = document.createElement("img");
let carrot = document.createElement("img");

sheep.id = "sheep";
sheep.className = "animals";
sheep.src = "./images/sheep.png";

wolf.id = "wolf";
wolf.className="animals";
wolf.src = "./images/wolf.png"

carrot.id = "carrot";
carrot.className="animals";
carrot.src = "./images/carrot.png"

start.addEventListener('click', () =>{
    let startScreen = document.querySelector("#startScreen");

    startScreen.style.display = "none";

    boatDiv.style.justifyContent = 'flex-start';

    sheep.style.position= "static";
    wolf.style.position= "static";
    carrot.style.position= "static";
    leftSide.appendChild(sheep);
    leftSide.appendChild(wolf);
    leftSide.appendChild(carrot);
    
})
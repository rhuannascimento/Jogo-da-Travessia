let start = document.querySelector("#start");
let restart = document.querySelector("#restart");
let again = document.querySelector("#again");

let looseScreen = document.querySelector("#loose");
let winScreen = document.querySelector("#win");

let leftSide = document.querySelector(".left");
let rightSide = document.querySelector(".right")

let boatDiv = document.querySelector(".boatDiv");
let boat = document.querySelector(".boat");

let sheep = document.createElement("img");
let wolf = document.createElement("img");
let carrot = document.createElement("img");

looseScreen.style.display="none";
winScreen.style.display="none";

sheep.id = "sheep";
sheep.className = "animals";
sheep.src = "./images/sheep.png";

wolf.id = "wolf";
wolf.className="animals";
wolf.src = "./images/wolf.png"

carrot.id = "carrot";
carrot.className="animals";
carrot.src = "./images/carrot.png"

boatDiv.style.justifyContent='flex-start'

let cont = 0;

start.addEventListener('click', () =>{
    let startScreen = document.querySelector("#startScreen");

    startScreen.style.display = "none";

    leftSide.appendChild(sheep);
    leftSide.appendChild(wolf);
    leftSide.appendChild(carrot);
    
})

restart.addEventListener('click', () =>{

    looseScreen.style.display = "none";
    startScreen.style.display = "initial";

    leftSide.appendChild(sheep);
    leftSide.appendChild(wolf);
    leftSide.appendChild(carrot);
    boatDiv.style.justifyContent = 'flex-start';
    cont = 0;
    sheep.style.right = "0%";
    wolf.style.right = "0%";
    carrot.style.right = "0%";
    
})

again.addEventListener('click', () =>{

    winScreen.style.display = "none";
    startScreen.style.display = "initial";

    leftSide.appendChild(sheep);
    leftSide.appendChild(wolf);
    leftSide.appendChild(carrot);
    boatDiv.style.justifyContent = 'flex-start';
    cont = 0;
    sheep.style.right = "0%";
    wolf.style.right = "0%";
    carrot.style.right = "0%";
    
})

sheep.addEventListener('click', () => {

    if(boatDiv.style.justifyContent == "flex-start"){
        if(leftSide.querySelector("#sheep") != null && cont == 0){
            leftSide.removeChild(sheep);
            sheep.style.right = "15%";
            boatDiv.appendChild(sheep);
            cont++;
        }else if(boatDiv.querySelector("#sheep")!=null){
            boatDiv.removeChild(sheep);
            sheep.style.right = "0%";
            leftSide.appendChild(sheep);
            cont--;
        }
    }else{
        if(rightSide.querySelector("#sheep") != null && cont == 0){
            rightSide.removeChild(sheep);
            sheep.style.right = "15%";
            boatDiv.appendChild(sheep);
            cont++;
        }else if(boatDiv.querySelector("#sheep")!=null){
            boatDiv.removeChild(sheep);
            sheep.style.right = "0%";
            rightSide.appendChild(sheep);
            cont--;
        }
    }

})

wolf.addEventListener('click', () => {

    if(boatDiv.style.justifyContent == "flex-start"){
        if(leftSide.querySelector("#wolf") != null && cont == 0){
            leftSide.removeChild(wolf);
            wolf.style.right = "15%";
            boatDiv.appendChild(wolf);
            cont++;
        }else if(boatDiv.querySelector("#wolf")!=null){
            boatDiv.removeChild(wolf);
            wolf.style.right = "0%";
            leftSide.appendChild(wolf);
            cont--;
        }
    }else{
        if(rightSide.querySelector("#wolf") != null && cont == 0){
            rightSide.removeChild(wolf);
            wolf.style.right = "15%";
            boatDiv.appendChild(wolf);
            cont ++;
        }else if(boatDiv.querySelector("#wolf")!=null){
            boatDiv.removeChild(wolf);
            wolf.style.right = "0%";
            rightSide.appendChild(wolf);
            cont--;
        }
    }

})

carrot.addEventListener('click', () => {

    if(boatDiv.style.justifyContent == "flex-start"){
        if(leftSide.querySelector("#carrot") != null && cont == 0){
            leftSide.removeChild(carrot);
            carrot.style.right = "15%";
            boatDiv.appendChild(carrot);
            cont++;
        }else if(boatDiv.querySelector("#carrot")!=null){
            boatDiv.removeChild(carrot);
            carrot.style.right = "0%";
            leftSide.appendChild(carrot);
            cont--;
        }
    }else{
        if(rightSide.querySelector("#carrot") != null && cont == 0){
            rightSide.removeChild(carrot);
            carrot.style.right = "15%";
            boatDiv.appendChild(carrot);
            cont++;
        }else if(boatDiv.querySelector("#carrot")!=null){
            boatDiv.removeChild(carrot);
            carrot.style.right = "0%";
            rightSide.appendChild(carrot);
            cont--;
        }
    }

})


boat.addEventListener('click', () => {
    if(boatDiv.style.justifyContent == 'flex-start'){
        boatDiv.style.justifyContent = 'flex-end';
    }else{
        boatDiv.style.justifyContent = 'flex-start';
    }
})

boat.addEventListener('click', () =>{
    
    if(boatDiv.style.justifyContent == 'flex-start'){
        if(rightSide.querySelector("#wolf")!=null && rightSide.querySelector("#sheep")!=null){
           looseScreen.style.display="initial"; 
        }else if(rightSide.querySelector("#sheep")!=null && rightSide.querySelector("#carrot")!=null){
            looseScreen.style.display="initial"; 
        }
    }else{
        if(leftSide.querySelector("#wolf")!=null && leftSide.querySelector("#sheep")!=null){
            looseScreen.style.display="initial"; 
         }else if(leftSide.querySelector("#sheep")!=null && leftSide.querySelector("#carrot")!=null){
            looseScreen.style.display="initial"; 
        }   
    }   
})

document.body.addEventListener("click", () => {
    if(rightSide.querySelector("#wolf")!=null && rightSide.querySelector("#sheep")!=null && rightSide.querySelector("#carrot")!=null){
        winScreen.style.display="initial";
    }
})
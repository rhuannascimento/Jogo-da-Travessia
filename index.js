let start = document.querySelector("#start");
let restart = document.querySelector("#restart");
let again = document.querySelector("#again");

let winScreen = document.querySelector("#win");
let looseScreen = document.querySelector("#loose");

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

let cont = 0;

start.addEventListener('click', () =>{

    let startScreen = document.querySelector("#startScreen");

    startScreen.style.display = "none";

    boatDiv.style.justifyContent = 'flex-start';
    cont = 0;

    sheep.style.position= "static";
    wolf.style.position= "static";
    carrot.style.position= "static";
    leftSide.appendChild(sheep);
    leftSide.appendChild(wolf);
    leftSide.appendChild(carrot);
    
})

restart.addEventListener('click', () =>{

    looseScreen.style.display = "none";
    startScreen.style.display = "block";
    
})

again.addEventListener('click', () =>{
    
    sheep.style.position= "static";
    wolf.style.position= "static";
    carrot.style.position= "static";
    leftSide.appendChild(sheep);
    leftSide.appendChild(wolf);
    leftSide.appendChild(carrot);

    winScreen.style.display = "none";
    startScreen.style.display = "block";

    
})

sheep.addEventListener('click', () => {

    if(boatDiv.style.justifyContent == "flex-start"){
        if(leftSide.querySelector("#sheep") != null && cont == 0){
            leftSide.removeChild(sheep);
            sheep.style.position="absolute";
            boatDiv.appendChild(sheep);
            cont++;
        }else if(boatDiv.querySelector("#sheep")!=null){
            boatDiv.removeChild(sheep);
            sheep.style.position= "static";
            leftSide.appendChild(sheep);
            cont--;
        }
    }else{
        if(rightSide.querySelector("#sheep") != null && cont == 0){
            rightSide.removeChild(sheep);
            sheep.style.position="absolute";
            boatDiv.appendChild(sheep);
            cont++;
        }else if(boatDiv.querySelector("#sheep")!=null){
            boatDiv.removeChild(sheep);
            sheep.style.position= "static";
            rightSide.appendChild(sheep);
            cont--;
        }
    }

})

wolf.addEventListener('click', () => {

    if(boatDiv.style.justifyContent == "flex-start"){
        if(leftSide.querySelector("#wolf") != null && cont == 0){
            leftSide.removeChild(wolf);
            wolf.style.position="absolute";
            boatDiv.appendChild(wolf);
            cont++;
        }else if(boatDiv.querySelector("#wolf")!=null){
            boatDiv.removeChild(wolf);
            wolf.style.position= "static";
            leftSide.appendChild(wolf);
            cont--;
        }
    }else{
        if(rightSide.querySelector("#wolf") != null && cont == 0){
            rightSide.removeChild(wolf);
            wolf.style.position="absolute";
            boatDiv.appendChild(wolf);
            cont ++;
        }else if(boatDiv.querySelector("#wolf")!=null){
            boatDiv.removeChild(wolf);
            wolf.style.position= "static";
            rightSide.appendChild(wolf);
            cont--;
        }
    }

})

carrot.addEventListener('click', () => {

    if(boatDiv.style.justifyContent == "flex-start"){
        if(leftSide.querySelector("#carrot") != null && cont == 0){
            leftSide.removeChild(carrot);
            carrot.style.position="absolute";
            boatDiv.appendChild(carrot);
            cont++;
        }else if(boatDiv.querySelector("#carrot")!=null){
            boatDiv.removeChild(carrot);
            carrot.style.position= "static";
            leftSide.appendChild(carrot);
            cont--;
        }
    }else{
        if(rightSide.querySelector("#carrot") != null && cont == 0){
            rightSide.removeChild(carrot);
            carrot.style.position="absolute";
            boatDiv.appendChild(carrot);
            cont++;
        }else if(boatDiv.querySelector("#carrot")!=null){
            boatDiv.removeChild(carrot);
            carrot.style.position= "static";
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
        if(rightSide.querySelector("#wolf")!=null && rightSide.querySelector("#sheep")!=null && rightSide.querySelector("#carrot")==null){
           looseScreen.style.display="block"; 
        }else if(rightSide.querySelector("#sheep")!=null && rightSide.querySelector("#carrot")!=null && rightSide.querySelector("#wolf")==null){
            looseScreen.style.display="block";
        }
    }else{
        if(leftSide.querySelector("#wolf")!=null && leftSide.querySelector("#sheep")!=null && leftSide.querySelector("#carrot")==null){
            looseScreen.style.display="block"; 
         }else if(leftSide.querySelector("#sheep")!=null && leftSide.querySelector("#carrot")!=null && leftSide.querySelector("#wolf")==null){
            looseScreen.style.display="block"; 
        }   
    }   
})

document.body.addEventListener("click", () => {
    if(rightSide.querySelector("#sheep")!=null && rightSide.querySelector("#carrot")!=null && rightSide.querySelector("#wolf")!=null){
        winScreen.style.display="block";
    }
})
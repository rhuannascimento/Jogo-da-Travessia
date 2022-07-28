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

sheep.addEventListener('click', () => {move(sheep.id, sheep)});
wolf.addEventListener('click', () => {move(wolf.id, wolf)});
carrot.addEventListener('click', () => {move(carrot.id, carrot)});

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

function move(id, item){

    if(boatDiv.style.justifyContent == "flex-start"){
        if(leftSide.querySelector(`#${id}`) != null && cont == 0){
            leftSide.removeChild(item);
            item.style.position="absolute";
            boatDiv.appendChild(item);
            cont++;
        }else if(boatDiv.querySelector(`#${id}`)!=null){
            boatDiv.removeChild(item);
            item.style.position= "static";
            leftSide.appendChild(item);
            cont--;
        }
    }else{
        if(rightSide.querySelector(`#${id}`) != null && cont == 0){
            rightSide.removeChild(item);
            item.style.position="absolute";
            boatDiv.appendChild(item);
            cont++;
        }else if(boatDiv.querySelector(`#${id}`)!=null){
            boatDiv.removeChild(item);
            item.style.position= "static";
            rightSide.appendChild(item);
            cont--;
        }
    }

}


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
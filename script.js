'use strict' 

function Animal(animalName){
    this.animalName = animalName;
   
}
Animal.prototype.render = function(){
let animalDiv = document.createElement('div');
animalDiv.className = `${this.animalName}object`;
animalDiv.textContent = this.animalName;
let animalSection = document.querySelector(`#${this.animalName}Section`);
animalSection.appendChild(animalDiv);
}
    
let makeCatButton = document.getElementById('makeCat');
 makeCatButton.addEventListener('click', makeCat)
 function makeCat(){
let cat = new Animal('cat');
 cat.render();
}

 let makeDogButton = document.getElementById('goMakeDog');
makeDogButton.addEventListener('click', goMakeDog)
function goMakeDog() {
 let dog = new Animal('dog');
 dog.render();
}


let makeHorseButton = document.getElementById('goMakeHorse');
makeHorseButton.addEventListener('click', goMakeHorse)
function goMakeHorse() {
    let horse = new Animal('horse');
    horse.render();
}


let makesheepButton = document.getElementById('goMakeSheep');
makesheepButton.addEventListener('click', goMakeSheep)
function goMakeSheep() {
    let sheep = new Animal('sheep');
    sheep.render();
}

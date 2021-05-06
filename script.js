'use strict' 

function Animal(animalName){
    this.animalName = animalName;
   
}
Animal.prototype.render = function() {
let animalDiv = document.createdElement('div');
animalDiv.className = `${this.animalName}Object`;
animalDiv.textContent = this.animalName;
let animalSection = documnet.querySelector(`#${this.animalName}Section`)
animalSection.appendChild(animalDiv);
}
    
let makeCatButton  = document.getElementById('makeCat');
 makeCatButton.addEventListener('click', goMakeCat)
 function goMakeCat() {
let cat = new Animal('cat');
 cat.render();
}

 let makeDogButton = document.getElementById('makeDog');
makeDogButton.addEventListener('click', goMakeDog)
function goMakeDog() {
 let dog = new Animal('dog');
 dog.render();
}


let makeHorseButton = document.getElementById('makeHorse');
makeHorseButton.addEventListener('click', goMakeHorse)
function goMakeHorse() {
    let horse = new Animal('horse');
    horse.render();
}


let makesheepButton = document.getElementById('makeSheep');
makesheepButton.addEventListener('click', goMakeSheep)
function goMakeSheep() {
    let sheep = new Animal('sheep');
    sheep.render();
}

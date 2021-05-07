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

    let makeCatButton  = document.getElementById('makeCat');
    makeCatButton.addEventListener('click', goMakeCat);
    function goMakeCat(){
    let cat = new animal('cat', 'catObject','cat');
    cat.render();
}

 let makeDogButton = document.getElementById('makeDog');
makeDogButton.addEventListener('click', goMakeDog);
function goMakeDog(){
    let dog = new Animal('dog', 'dogObject', 'dog');
    dog.render();
}


let makeHorseButton = document.getElementById('makeHorse');
makeHorseButton.addEventListener('click', goMakeHorse);
function goMakeHorse(){
    let dog = new Animal('horse', 'horseObject', 'horse');
    horse.render();
}


let makesheepButton = document.getElementById('goMakeSheep');
makesheepButton.addEventListener('click', goMakeSheep)
function goMakeSheep() {
    let sheep = new Animal('sheep')
let makesheepButton = document.getElementById('makeSheep');
makesheepButton.addEventListener('click', goMakeSheep);
function goMakeSheep(){
    let dog = new Animal('sheep', 'sheepObject', 'sheep');

    sheep.render();
}

'use strict'


function Animal(animalName){
    this.animalName = animalName;


}
Animal.prototype.render = function(){
let animalDiv = document.createdElement('div');
animalDiv.className = `${this.animalName}object`;
animalDiv.textContent = this.animalName;
let animalSection = document.querySelector(`#${this.animalName}Section`);
animalSection.appendChild(animalDiv);
}
    
    let makeCatButton  = document.getElementById('goMakeCat');
    makeCatButton.addEventListener('click', goMakeCat);
    function goMakeCat(){
    let cat = new animal('cat');
    cat.render();
}

 let makeDogButton = document.getElementById('goMakeDog');
makeDogButton.addEventListener('click', goMakeDog);
function goMakeDog(){
    let dog = new Animal('dog');
    dog.render();
}


let makeHorseButton = document.getElementById('makeHorse');
makeHorseButton.addEventListener('click', goMakeHorse);
function goMakeHorse(){
    let dog = new Animal('horse');
    horse.render();
}


let makesheepButton = document.getElementById('makeSheep');
makesheepButton.addEventListener('click', goMakeSheep);
function goMakeSheep(){
    let dog = new Animal('sheep');
    sheep.render();
}

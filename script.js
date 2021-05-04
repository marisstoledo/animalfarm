'use strict'


 //TODO: I want to create a template - constructor function for an animal
// Is that four different constructors?
// Create a single constructor - template
// the constructor takes as parameters - animalName
// property called - animalName
// method to render itself on the screen - render()

function Animal(animalName, animalClass, animalId){
    this.animalName = animalName;
    this.animalClass = animalClass;
    this.animalId = animalId;

}
Animal.prototype.render = function() {
let target = document.getElementById(this.animalId)
let animalDiv = document.createdElement('div')
animalDiv.className = this.animalName;
animalDiv.textContent = this.animalName;
animalSelection.appendChild(animalDiv);
}
    
    let makeCatButton  = document.getElementById('makeCat');
    makeCatButton.addEventListener('click', goMakeCat)
    function goMakeCat(){
    let cat = new animal('cat', 'catObject','cat');
    cat.render();
}

 let makeDogButton = document.getElementById('makeDog');
makeDogButton.addEventListener('click', goMakeDog)
function goMakeDog(){
    let dog = new Animal('dog', 'dogObject', 'dog');
    dog.render();
}


let makeHorseButton = document.getElementById('makeHorse');
makeHorseButton.addEventListener('click', goMakeHorse)
function goMakeHorse(){
    let dog = new Animal('horse', 'horseObject', 'horse');
    horse.render();
}


let makesheepButton = document.getElementById('makeSheep');
makeSheepButton.addEventListener('click', goMakeSheep)
function goMakeSheep(){
    let dog = new Animal('sheep', 'sheepObject', 'sheep');
    sheep.render();
}

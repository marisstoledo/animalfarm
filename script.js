'use strict' 


/*created a template for the animals to mimic for the animal name*/

function Animal(animalName){
    this.animalName = animalName;


}
Animal.prototype.render = function(){
let animalDiv = document.createdElement('div');
function Animal(animalName){
    this.animalName = animalName;
   
}

/*The render looks at the Id, then goes on to crete the div. Then is animal to name the animal for AppendChild.*/
Animal.prototype.render = function(){
let animalDiv = document.createElement('div');
animalDiv.className = `${this.animalName}object`;
animalDiv.textContent = this.animalName;
let animalSection = document.querySelector(`#${this.animalName}Section`);
animalSection.appendChild(animalDiv);
}
    

/*this creates the "makeCat" id then adds a event listner so you are able to click the buttons to "makeCat". To use the specifc id you use the render function like "cat". Same applys for the dog, horse, and sheep.*/
    let makeCatButton  = document.getElementById('goMakeCat');

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


let makesheepButton = document.getElementById('goMakeSheep');
makesheepButton.addEventListener('click', goMakeSheep)
function goMakeSheep() {
    let sheep = new Animal('sheep')
let makesheepButton = document.getElementById('makeSheep');
makesheepButton.addEventListener('click', goMakeSheep);
function goMakeSheep(){
    let dog = new Animal('sheep');
    let dog = new Animal('sheep', 'sheepObject', 'sheep');

    sheep.render();
}

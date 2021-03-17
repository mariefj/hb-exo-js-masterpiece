"use strict";

//**********Nombre aléatoire compris entre 2 nombres
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);   //+1 pour inclure le max car sinon quand on coupe sans le +1 alors on ne peut pas l'atteindre
}

//**********Couleur aléatoire

function getRandomColor() {
    let red = getRandomInteger(0,255);
    let green = getRandomInteger(0,255);
    let blue = getRandomInteger(0,255);
    let opacity = Math.random();
    return "rgba(" + red + "," + green + "," + blue + "," + opacity + ")";
}

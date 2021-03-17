"use strict";

let canvas;
let allDisks = [];

function onClickCanvas(event) {
    let disk = new Disk();

    let location = {x: event.offsetX, y: event.offsetY};
    let radius = getRandomInteger(10, 50);
    let color = getRandomColor();

    disk.setLocation(location);
    disk.setRadius(radius);
    disk.setColor(color);

    disk.draw(canvas);
    allDisks.push(disk);

}

function allDisksBlack() {
    let allDisksTurnBlack = allDisks;
    for(let disk of allDisksTurnBlack) {
        disk.setColor("black");
        disk.draw(canvas);
    }
}


document.addEventListener("DOMContentLoaded", function() {

    canvas = document.querySelector("#masterpiece");
    canvas.addEventListener("click", onClickCanvas);
    document.querySelector("#black").addEventListener("click", allDisksBlack);

});

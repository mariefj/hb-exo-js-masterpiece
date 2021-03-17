"use strict";

class Disk {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.location = {x:0 ,y:0};
        this.color = "black";

    }

    setLocation(location) {
        this.location = location;
    }

    setColor(color) {
        this.color = color;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    draw(canvas) {
        let context = canvas.getContext("2d");
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
}
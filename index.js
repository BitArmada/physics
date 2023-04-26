import Point from './Point.js';

var canv = document.getElementById("canvas");
var ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight;
document.body.style.margin = 0;
document.body.style.overflow = 'hidden';

var points = [];

for(var i = 0; i < 10; i++){
    points.push(new Point(Math.random()*canv.width, Math.random()*canv.height));
}

function spread(points){
    for(var i = 0; i < points.length; i++){
        var p1 = points[i];
        var dx, dy = 0;
        for(var j = 0; j < points.length; j++){
            var p2 = points[j];
            if(i == j) continue;
            const dist = Math.sqrt(Math.pow(p1.x-p2.x, 2), Math.pow(p1.y-p2.y, 2));
            dx += (p1.x-p2.x)/dist;
            dy += (p1.y-p2.y)/dist;
        }
        p1.x += dx;
        p1.y += dy;
    }
}

window.requestAnimationFrame(update);

function update(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canv.width,canv.height);

    for(var i = 0; i < points.length; i++){
        const p = points[i];
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }


    window.requestAnimationFrame(update);
}
var canvas=document.querySelector("canvas")
var c=canvas.getContext("2d")

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

mouse={
    x: undefined,
    y: undefined
}

colorArray=[
    '#2E333D',
    '#07AED7',
    '#F58167',
    '#FB404D',
    '#F3F5F1'
]

window.addEventListener('mousemove',function(event) {
    mouse.x=event.x
    mouse.y=event.y
})

addEventListener('resize',function() {
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
})

function randomInt(start,end) {
    return Math.floor(Math.random()*end+start)
}

function Objects(x,y,radius,color) {
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.color=color;

    this.draw=() => {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle=this.color
        c.fill();
    }

    this.update=() => {
        this.draw();
    }
}

objects=[]
for (let index = 0; index < 50; index++) {
    objects.push(new Objects());
    
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    objects.forEach(element => {
        element.update()
    });
}

animate();

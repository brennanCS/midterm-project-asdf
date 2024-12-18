class Square{
    constructor(y, canvas, color){
        this.x = 0;
        this.y = y;
        this.width = canvas.width;
        this.height = this.width;
        this.color = color;
        this.active = true;
    }

    draw(c){
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.y += 10;
        if (this.y > this.width){
            this.y = -(this.width) * 4;
        }
    }
}

let active = true;

let slot1 = document.getElementById("slot-1");
let slot2 = document.getElementById("slot-2");
let slot3 = document.getElementById("slot-3");

let c1 = slot1.getContext("2d");
let c2 = slot2.getContext("2d");
let c3 = slot3.getContext("2d");

slotSquares1 = [
    new Square(0, slot1, "blue"),
    new Square(slot1.width, slot1, "red"),
    new Square(-slot1.width, slot1, "yellow"),
    new Square(-slot1.width * 2, slot1, "orange"),
    new Square(-slot1.width * 3, slot1, "purple")
]

slotSquares2 = [
    new Square(0, slot2, "blue"),
    new Square(slot2.width, slot2, "red"),
    new Square(-slot2.width, slot2, "yellow"),
    new Square(-slot2.width * 2, slot2, "orange"),
    new Square(-slot2.width * 3, slot2, "purple")
];

slotSquares3 = [
    new Square(0, slot3, "blue"),
    new Square(slot3.width, slot3, "red"),
    new Square(-slot3.width, slot3, "yellow"),
    new Square(-slot3.width * 2, slot3, "orange"),
    new Square(-slot3.width * 3, slot3, "purple")
];

//randomizes the squares y value;
for (let i = 0; i < slotSquares1.length; i++) {
    let j = Math.floor(Math.random() * slotSquares1.length);
    let temp = slotSquares1[i].y;
    slotSquares1[i].y = slotSquares1[j].y;
    slotSquares1[j].y = temp;
}

for (let i = 0; i < slotSquares2.length; i++) {
    let j = Math.floor(Math.random() * slotSquares2.length);
    let temp = slotSquares2[i].y;
    slotSquares2[i].y = slotSquares2[j].y;
    slotSquares2[j].y = temp;
}

for (let i = 0; i < slotSquares3.length; i++) {
    let j = Math.floor(Math.random() * slotSquares3.length);
    let temp = slotSquares3[i].y;
    slotSquares3[i].y = slotSquares3[j].y;
    slotSquares3[j].y = temp;
}

function animate(){
    requestAnimationFrame(animate);
    c1.clearRect(0, 0, slot1.width, slot1.height);
    c2.clearRect(0, 0, slot2.width, slot2.height);
    c3.clearRect(0, 0, slot3.width, slot3.height);
    for (let i = 0; i < slotSquares1.length; i++){
        slotSquares1[i].draw(c1);
        slotSquares2[i].draw(c2);
        slotSquares3[i].draw(c3);
        if (slotSquares1[i].active){
            slotSquares1[i].update();
        }
        if (slotSquares2[i].active){
            slotSquares2[i].update();
        }
        if (slotSquares3[i].active){
            slotSquares3[i].update();
        }
    }
}

function stopSlots(){
    setTimeout(() => {
        for (let i = 0; i < slotSquares1.length; i++){
            slotSquares1[i].active = false;
        }
        
    }, 1000);
    setTimeout(() => {
        for (let i = 0; i < slotSquares2.length; i++){
            slotSquares2[i].active = false;
        }
    }, 2000);
    setTimeout(() => {
        for (let i = 0; i < slotSquares3.length; i++){
            slotSquares3[i].active = false;
        }
    }, 3000)
}

animate();
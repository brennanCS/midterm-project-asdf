class Square{
    constructor(y, canvas, color, image){
        this.x = 0;
        this.y = y;
        this.width = canvas.width;
        this.height = this.width;
        this.color = color;
        this.active = true;
        this.imageURL = image;
        this.image = new Image(this.width, this.height);
        this.image.src = image;
    }

    draw(c){
        c.fillStyle = this.color;
        c.drawImage(this.image, this.x, this.y, this.width, this.height);
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
    new Square(0, slot1, "blue", "slots/3rd-Angel.png"),
    new Square(slot1.width, slot1, "red", "slots/4th-Angel.png"),
    new Square(-slot1.width, slot1, "yellow", "slots/6th-Angel.png"),
    new Square(-slot1.width * 2, slot1, "orange", "slots/7th-Angel.png"),
    new Square(-slot1.width * 3, slot1, "purple", "slots/8th-Angel.png")
]

slotSquares2 = [
    new Square(0, slot2, "blue", "slots/3rd-Angel.png"),
    new Square(slot2.width, slot2, "red", "slots/4th-Angel.png"),
    new Square(-slot2.width, slot2, "yellow", "slots/6th-Angel.png"),
    new Square(-slot2.width * 2, slot2, "orange", "slots/7th-Angel.png"),
    new Square(-slot2.width * 3, slot2, "purple", "slots/8th-Angel.png")
];

slotSquares3 = [
    new Square(0, slot3, "blue", "slots/3rd-Angel.png"),
    new Square(slot3.width, slot3, "red", "slots/4th-Angel.png"),
    new Square(-slot3.width, slot3, "yellow", "slots/6th-Angel.png"),
    new Square(-slot3.width * 2, slot3, "orange", "slots/7th-Angel.png"),
    new Square(-slot3.width * 3, slot3, "purple", "slots/8th-Angel.png")
];

//randomizes the squares y value;

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
    let chips = 
    let timeStop1 = Math.floor(Math.random() * 1500);
    let timeStop2 = timeStop1 + Math.floor(Math.random() * 1500);
    let timeStop3 = timeStop2 + Math.floor(Math.random() * 1500);
    setTimeout(() => {
        for (let i = 0; i < slotSquares1.length; i++){
            slotSquares1[i].active = false;
        }
        
    }, timeStop1);
    setTimeout(() => {
        for (let i = 0; i < slotSquares2.length; i++){
            slotSquares2[i].active = false;
        }
    }, timeStop2);
    setTimeout(() => {
        for (let i = 0; i < slotSquares3.length; i++){
            slotSquares3[i].active = false;
        }
    }, timeStop3);

    //determines which square is active for each slot
    setTimeout(() => {
        var square1;
        var square2;
        var square3;

        for (let i = 0; i < slotSquares1.length; i++){
            if (slotSquares1[i].y >= -(slotSquares1[i].height / 2) && slotSquares1[i].y <= slotSquares1[i].height / 2){
                square1 = slotSquares1[i];
                console.log(square1);
                break;
            }
        }
        for (let i = 0; i < slotSquares2.length; i++){
            if (slotSquares2[i].y >= -(slotSquares2[i].height / 2) && slotSquares2[i].y <= slotSquares2[i].height / 2){
                square2 = slotSquares2[i];
                console.log('test');
                break;
            }
        }
        for (let i = 0; i < slotSquares3.length; i++){
            if (slotSquares3[i].y >= -(slotSquares3[i].height / 2) && slotSquares3[i].y <= slotSquares3[i].height / 2){
                square3 = slotSquares3[i];
                console.log('test');
                break;
            }
        }

        square1.y = 0;
        square2.y = 0;
        square3.y = 0;

        if (square1.imageURL == square2.imageURL && square2.imageURL == square3.imageURL){
            openAlertWindow("You won 3x your bet");
            let chips = parseInt(getCookie('chips'));
            setCookie('chips', chips + 3, 100);
        }
        else if (square1.imageURL == square2.imageURL || square2.imageURL == square3.imageURL || square1.imageURL == square2.imageURL){
            openAlertWindow("You won 2x your bet");
            let chips = parseInt(getCookie('chips'));
            setCookie('chips', chips + 2, 100);
        }
        else{
            openAlertWindow("No matches :(");
        }

    }, timeStop3);
}

function openAlertWindow(message){
    document.querySelector('.alert-window').style.display = 'block';
    document.getElementById('alert-message').innerHTML = message;
}

function closeAlertWindow(){
    document.querySelector('.alert-window').style.display = 'none';
    location.reload();
}

animate();
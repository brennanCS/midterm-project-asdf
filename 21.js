class Card{
    constructor(suit, rank, value){
        this.suit = suit;
        this.rank = rank;
        this.value = value;
        this.flipped = false;
        this.image = "/cards/" + suit[0].toLowerCase();
        if (value < 10){
            this.image += "0" + value;
        }
        else if (rank == "10"){
            this.image += "10";
        }
        else if (rank == "Jack"){
            this.image += "11";
        }
        else if (rank == "Queen"){
            this.image += "12";
        }
        else if (rank == "King"){
            this.image += "13";
        }
        else if (rank == "Ace"){
            this.image += "01";
        }
        this.image += ".png";
    }
}

let cards = [];
let playerCards = [];
let dealerCards = [];

// Spades
cards.push(new Card("Spades", "Ace", 11));
cards.push(new Card("Spades", "2", 2));
cards.push(new Card("Spades", "3", 3));
cards.push(new Card("Spades", "4", 4));
cards.push(new Card("Spades", "5", 5));
cards.push(new Card("Spades", "6", 6));
cards.push(new Card("Spades", "7", 7));
cards.push(new Card("Spades", "8", 8));
cards.push(new Card("Spades", "9", 9));
cards.push(new Card("Spades", "10", 10));
cards.push(new Card("Spades", "Jack", 10));
cards.push(new Card("Spades", "Queen", 10));
cards.push(new Card("Spades", "King", 10));

// Hearts
cards.push(new Card("Hearts", "Ace", 11));
cards.push(new Card("Hearts", "2", 2));
cards.push(new Card("Hearts", "3", 3));
cards.push(new Card("Hearts", "4", 4));
cards.push(new Card("Hearts", "5", 5));
cards.push(new Card("Hearts", "6", 6));
cards.push(new Card("Hearts", "7", 7));
cards.push(new Card("Hearts", "8", 8));
cards.push(new Card("Hearts", "9", 9));
cards.push(new Card("Hearts", "10", 10));
cards.push(new Card("Hearts", "Jack", 10));
cards.push(new Card("Hearts", "Queen", 10));
cards.push(new Card("Hearts", "King", 10));

// Diamonds
cards.push(new Card("Diamonds", "Ace", 11));
cards.push(new Card("Diamonds", "2", 2));
cards.push(new Card("Diamonds", "3", 3));
cards.push(new Card("Diamonds", "4", 4));
cards.push(new Card("Diamonds", "5", 5));
cards.push(new Card("Diamonds", "6", 6));
cards.push(new Card("Diamonds", "7", 7));
cards.push(new Card("Diamonds", "8", 8));
cards.push(new Card("Diamonds", "9", 9));
cards.push(new Card("Diamonds", "10", 10));
cards.push(new Card("Diamonds", "Jack", 10));
cards.push(new Card("Diamonds", "Queen", 10));
cards.push(new Card("Diamonds", "King", 10));

// Clubs
cards.push(new Card("Clubs", "Ace", 11));
cards.push(new Card("Clubs", "2", 2));
cards.push(new Card("Clubs", "3", 3));
cards.push(new Card("Clubs", "4", 4));
cards.push(new Card("Clubs", "5", 5));
cards.push(new Card("Clubs", "6", 6));
cards.push(new Card("Clubs", "7", 7));
cards.push(new Card("Clubs", "8", 8));
cards.push(new Card("Clubs", "9", 9));
cards.push(new Card("Clubs", "10", 10));
cards.push(new Card("Clubs", "Jack", 10));
cards.push(new Card("Clubs", "Queen", 10));
cards.push(new Card("Clubs", "King", 10));

//shuffles deck
for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]]; // Swap elements
}

function dealToPlayer(flipped){
    let i = Math.floor(Math.random() * cards.length);
    playerCards.push(cards[i]);
    let parent = document.getElementById("player-cards");
    let card = document.createElement("img");
    cards[i].flipped = flipped;
    if (flipped){
        card.setAttribute("src", "/cards/back.png");
    }
    else{
        card.setAttribute("src", cards[i].image);
    }
    card.setAttribute("class", "card");
    parent.appendChild(card);
    cards.splice(i, 1);
    if (calcVal(playerCards) == 21){
        alert("You win!");
    }
    else if (calcVal(playerCards) > 21){
        alert("You busted :(");
    }
}

function dealToDealer(flipped){
    let i = Math.floor(Math.random() * cards.length);
    dealerCards.push(cards[i]);
    let parent = document.getElementById("dealer-cards");
    let card = document.createElement("img");
    cards[i].flipped = flipped;
    if (flipped){
        card.setAttribute("src", "/cards/back.png");
    }
    else{
        card.setAttribute("src", cards[i].image);
    }
    card.setAttribute("class", "card");
    parent.appendChild(card);
    cards.splice(i, 1);
}

function calcVal(cards){
    let total = 0;
    for (let i = 0; i < cards.length; i++){
        total += cards[i].value;
    }
    if (total > 21){
        for (let i = 0; i < cards.length; i++){
            if (cards[i].rank == "Ace"){
                total -= 10;
            }
            if (total <= 21){
                break;
            }
        }
    }
    return total;
}

//game logic
dealToPlayer(false);
dealToDealer(true);
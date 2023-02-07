let player = {
  Name: "per",
  Chips: "149",
};

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.Name + ": $" + player.Chips;

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  renderGame();
}

function renderGame() {
  sumEl.textContent = "sum : " + sum;
  cardEl.textContent = "cards: ";
  // create a for loop that render out all the cards instead of two
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "do you wand TO DRAW ANOTHER CARD";
  } else if (sum === 21) {
    message = "wohoo! you have got blackjack!";

    hasBlackjack = true;
  } else {
    message = "you are out of the game";

    isAlive = false;
  }
  messageEl.textContent = message;
}

function newcard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}

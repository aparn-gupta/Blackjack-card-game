let firstCard = 0; //variable to store the value of first card randomly generated on user's command
let secondCard = 0; //variable to store the value of second card randomly generated on user's command
let sum = 0; //to store the sum of the randomly generated cards

let isAlive = true; //stores value for whether player is eligible to be in the game. value=false when player loses.
let isBlackjack = false; //whether player has won. value=true when sum of cards = 21
let hasStarted = false; //whether user has started the game

let message = ""; //to store the message to be displayed in different instances

let newCard = 0; //stores value of new card to be drawn when sum of card values is less than 21
let cardsList = ""; //to be used for displaying the value of all the cards generated
let cardsArray = []; //array to store randomly generated cards
let cardValue = 0; 
  //stores card value to be returned corresponding to assigned value
  // of a given card in the Blackjack-game context. 10-14 card values
  //are taken as 10. Ace is taken as 11. 2-11 bear the same value.

let messageDisplayed = document.getElementById("message-el"); 
let cardsDisplayed = document.getElementById("card-el"); 
let sumDisplayed = document.getElementById("sum-el"); 



function getRandomNo() {  
  let Number = Math.floor(Math.random() * 14);  
  let randomNumber = Number + 1
  //added 1 to ensure randomNumber is not zero since
  // zero is not a card value in Bckjack game-context.

  if (randomNumber >= 10 && randomNumber < 14) {
    cardValue = 10;
  } else if (randomNumber === 1) {
    cardValue = 11;
  } else if (randomNumber >= 2 && randomNumber < 10) {
    cardValue = randomNumber;
  }

  return cardValue;
}

function start() {
  if (isAlive === true && isBlackjack === false && hasStarted === false) {
    hasStarted = true
    firstCard = getRandomNo();
    secondCard = getRandomNo();
    cardsArray = [firstCard, secondCard];

    for (i = 0; i < cardsArray.length; i++) {
      cardsList += cardsArray[i] + " ";
    }

    cardsDisplayed.textContent = "Cards: " + cardsList;
    sum = firstCard + secondCard;

    render();
  }
}

function render() {
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Woohoo! Blackjack!";
    isBlackjack = true;
  } else {
    message = "Sorry, you are out of game";
    isAlive = false;
  }
  messageDisplayed.textContent = message;
  sumDisplayed.textContent = "Sum: " + sum;
}

function onNewCard() {
  if (isAlive === true && isBlackjack === false) {
    newCard = getRandomNo();
    sum += newCard;
    sumDisplayed.textContent = "Sum: " + sum;
    cardsArray.push(newCard);
    for (i = 0; i < cardsArray.length; i++) {
      cardsList += cardsArray[i] + " ";
    }
    cardsDisplayed.textContent += newCard + " ";

    render();
  }
}

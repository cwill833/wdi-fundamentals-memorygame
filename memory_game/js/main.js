// the cards we will be playing with
let cards = ['Queen', 'Queen', 'King', 'King'];

// this will be the cards the player selected
let cardsInPlay = [];

// checks for a match of the two selected cards
let checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
	} else {
  console.log("Sorry, try again.");
	}
};

// logic for the game
let flipCard = function(cardId){
	console.log('User flipped ' + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);
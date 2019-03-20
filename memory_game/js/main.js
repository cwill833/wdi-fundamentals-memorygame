// the cards we will be playing with
let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];

// this will be the cards the player selected
let cardsInPlay = [];

// checks for a match of the two selected cards
let checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log('You found a match!');
  alert('You found a match!');
	} else {
  console.log('Sorry, try again.');
  alert('Sorry, try again');
	}

};

// logic for the game
let flipCard = function(cardId){
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);
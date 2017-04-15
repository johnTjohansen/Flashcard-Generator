//  npm modules
var inquirer = require("inquirer");
var fs = require("fs"); 
//  variables
var cardChoice = process.argv.slice[2];
var cardObj = {
    cardArr: []
};

if (cardChoice === "cloze") {
	acceptClozeCards();
} else {
	acceptBasicCards();
};

//--------------------functions-----------------------
function acceptBasicCards() {
	console.log("You will prompted to enter 10 flashcards");
	var BasicCard = require("./BasicCard");
	//var newCard = new BasicCard(front, back);
	for (var i = 0; i < 10; i++) { 
		inquirer.prompt([
		  {
    		type: "input",
    		message: "Enter a quiz question for the flashcard:",
    		name: "front"
  		  },
  		  {
    		type: "input",
    		message: "Enter the answer to that question:",
    		name: "back"
  		  },
		]).then(function (answers) {
			front = answers.front;
			back = answers.back;
			var newCard = new BasicCard(front, back);
			console.log("newCard " + newCard.stringify());
			cardObj.cardArr.push(newCard);
    	});
	};
	// move cardArr into external JSON file	
//	var jsonCard = JSON.stringify(cardObj);
//	fs.writeFile('BasicCard.json', jsonCard, 'utf8', callback);
};


function acceptClozeCards() {
	console.log("You will prompted to enter 10 Cloze cards");
	var ClozeCard = require("./ClozeCard");
	//var newCard = new ClozeCard(text, cloze);
	for (var i = 0; i < 10; i++) { 
		inquirer.prompt([
		  {
    		type: "input",
    		message: "Enter the complete statement for the flashcard:",
    		name: "fullText"
  		  },
  		  {
    		type: "input",
    		message: "Enter the cloze text to be guessed:",
    		name: "cloze"
  		  },
		]).then(function (answers) {
			var text = answers.fullText
			var cloze = answers.cloze
			var newCard = new ClozeCard(text, cloze);
			console.log("newCard " + newCard.stringify());
			//cardObj.cardArr.push(newCard)
    	});
	};
	//  move cardArr into external JSON file	
//	var jsonCard = JSON.stringify(cardObj);
//	fs.writeFile('ClozeCard.json', jsonCard, 'utf8', callback);
};



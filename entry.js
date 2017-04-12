var inquirer = require("inquirer");
var fs = require("fs");
var 

var cardChoice = process.argv(2).slice;
var cardArr = [];


if (cardChoice = "cloze") {
	acceptClozeCards();
} else {
	acceptBasicCards();
};

//--------------------functions-----------------------
function acceptBasicCards() {
	console.log("You will prompted to enter 10 flashcards");
	var newCard = new BasicCard(front, back) {
		this.front = front,
		this.back = back
	};
	for (var i = 0, i < 10; i++) { 
		inquirer.prompt([
		  {
    		type: "input",
    		message: "Enter a quiz question for the flashcard?",
    		name: "front"
  		  },
  		  {
    		type: "input",
    		message: "Enter the answer to that question:",
    		name: "back"
  		  },
		]).then(function (answers) {
			newCard.front = front
			newCard.back = back
			cardArr[i].push(newCard)
    	});
	};
	// move cardArr into external JSON file
};


function acceptClozeCards() {

	inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
    // Use user feedback for... whatever!! 
	});

};



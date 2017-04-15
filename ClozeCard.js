var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partText = function() {
		return this.text.replace(this.cloze, "...");
	};	
};

ClozeCard.prototype.chkCloze = function() {
	if (this.text.includes(this.cloze)) {
		return true;
	} else {
		console.log("Cloze text is not in the Full text!");
		return false;
	};
};

exports.ClozeCard = ClozeCard;
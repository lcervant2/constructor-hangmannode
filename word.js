
//list of letters object
//a boolean that says if word is guessed or not
// var LetterObjects = [];
// var guessed = false;
//display text function
// loop through letterobject array
// for each letterobject get the text
// concatenate text for each letter object
// return concatendated string

// actions methods
// isGuessed methos that returns guessed
// if (secret word.isGuessed) {
// 	gameover}

const letter = require('./letter.js');

function Word(target) {
	this.letterBucket = target.split('');
	this.progress = target.split('').map(() => '_')
	this.target = target;
	this.charsFound = 0;
	this.charsLength = target.split('').length

	const getLetterIndex = function(letter) {
		return this.letterBucket.indexOf(letter)
	}

	this.updateProgress = function(letterIndex, guessedChar) {
		this.progress = this.progress.map((char, i) => (letterIndex === i) ? guessedChar : char)
	}

	this.checkLetter = function(guessedLetter) {
		const letterIndex = this.letterBucket.indexOf(guessedLetter)

		if (letterIndex !== -1) {
			this.letterBucket = this.letterBucket.map((char, i) => (letterIndex === i) ? '_' :  char)
			this.charsFound = this.charsFound  + 1
			this.updateProgress(letterIndex, guessedLetter)
			return true
		} else {
			return false
		}
	}

	this.getProgress = function() {
		return this.progress.join('')
	}

	this.getRemainingLettersCount = function() {
		return this.charsLength - this.charsFound
	}
}

module.exports = Word;

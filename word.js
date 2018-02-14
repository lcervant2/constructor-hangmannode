
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
// gameover}

const Letter = require('./letter.js');

function Word(target) {
console.log(target)
this.letterBucket = []
this.initiate = function(){
for(var i = 0; i < target.length; i++){
this.letterBucket.push(new Letter(target.charAt(i)))
}
}
this.initiate()

this.progress = target.split('').map(() => '_')
this.target = target;
this.charsFound = 0;
this.charsLength = target.length

const getLetterIndex = function(letter) {
return this.letterBucket.indexOf(letter)
}

this.updateProgress = function(guessedChar) {
this.progress = this.letterBucket.map((char, i) =>{
return char.appear ? char.charac : "_"
})
}
//calls the guess function
this.checkLetter = function(guessedLetter) {
for(var n = 0; n < this.letterBucket.length; n++){
this.letterBucket[n].checkerFunc(guessedLetter)
}
this.supperCoolCheckerLetter(guessedLetter)
}
//returns string
this.supperCoolCheckerLetter = function(guessedLetter) {
//const letterIndex = this.letterBucket.indexOf(guessedLetter)
for(let z = 0; z < this.letterBucket.length; z++){
var output = this.letterBucket[z].returnUnderlying()
if(output != '_'){

this.charsFound = this.charsFound  + 1
this.updateProgress(guessedLetter)
}
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



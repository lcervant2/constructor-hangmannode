//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var Word = require('./word.js')
var prompt = require('prompt')

const game = {
wordBank: ['abc', 'sba', 'qwd', 'as', 'asd',],
currentWord: null,
guessesRemaining: 5,

welcomeMessage: function() {
console.log("Welcome to Front-End Code Hangman!")
console.log("Guess a letter of the name of a fron-end code language.")
console.log("Goodluck!")
console.log("-----------------------------")
prompt.start()
},

pickRandomWord: function() {
return this.wordBank[Math.floor(Math.random()*this.wordBank.length)]
},

setCurrentWord: function(word) {
this.currentWord = word
},

promptUser: function() {
let that = this;

if (that.guessesRemaining === 0) {
return console.log('No more chances. The correct word was: ', that.currentWord.target)
}

console.log('Here is your progress :', this.currentWord.getProgress())
console.log('Remaning chances: ' + this.guessesRemaining)

prompt.get(['letter'], function(err, result) {
// that.currentWord.checkLetter(result.letter)
// that.currentWord.supperCoolCheckerLetter(result.letter)
if (!that.currentWord.checkLetter(result.letter)) {
that.guessesRemaining -= 1
} 
if (that.currentWord.getRemainingLettersCount()<0) return console.log('Congrats you have won the game!')
console.log("-----------------------------")
that.promptUser()
})
},

start() {
this.welcomeMessage()
this.setCurrentWord(new Word(this.pickRandomWord()))
this.promptUser()
}
}

game.start()
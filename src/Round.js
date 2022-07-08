// const Card = require("./Card")
const Turn = require("./Turn")

class Round {
    constructor(deck) {
        this.turns = 0
        this.deck = deck.cardList
        this.incorrectGuesses = []
    }

    returnCurrentCard() {
        return this.deck[this.turns]
    }

    takeTurn(guess) {
        let newTurn = new Turn(guess, this.returnCurrentCard())
        this.turns ++
        if (!newTurn.evaluateGuess()) {
            this.incorrectGuesses.push(newTurn.card.id)
        }
        return newTurn.giveFeedback()
}

    calculatePercentCorrect() {
        if(this.turns > 0) {
            let numOfCorrect = (this.turns - this.incorrectGuesses.length)
            let percentCorrect = numOfCorrect / this.turns * 100
            return Math.round(percentCorrect)
        }
        return 0
    }
   
    endRound() {
        let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
        return message
    }
}
module.exports = Round
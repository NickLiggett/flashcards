const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');
// const Turn = require('./Turn');
const data = require('./data');
const util = require('./util');
const prototypeQuestions = data.prototypeData;

class Game {
  constructor() {
    this.deck = new Deck(prototypeQuestions)
    this.currentRound = new Round(this.deck)
  }

  start() {
    this.printMessage(this.deck, this.currentRound)
    this.printQuestion(this.currentRound)
    new Round(this.createCards())
  }

  createCards() {
    let cards = this.deck.cards.map((card) => new Card(card.id, card.question, card.answers, card.correctAnswer))
    return cards
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
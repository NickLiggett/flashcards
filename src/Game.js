const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');
// const Turn = require('./Turn');
const data = require('./data');
const util = require('./util');
const prototypeQuestions = data.prototypeData;

let card1 = new Card(15, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], 'object')
let card2 = new Card(23, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
let card3 = new Card(38, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method')

const testArray = [card1, card2, card3]

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
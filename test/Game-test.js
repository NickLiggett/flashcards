const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game.js')
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');
const Deck = require('../src/Deck.js');


describe('Game', () => {
    let game
    let round
    let deck

    beforeEach(() => {
        deck = new Deck(prototypeQuestions)
        round = new Round(deck)
        game = new Game()
    })
    
    it('should create cards and put them in a deck', () => {
        const { cards } = game.deck
        expect(cards).to.equal(game.deck.cards)
    })
    
    it('should create a new round using the deck', () => {
        expect(game.currentRound).to.deep.equal(round)

    })
})
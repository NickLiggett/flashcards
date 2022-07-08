const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
    let round
    let deck
    let card1
    let card2
    let card3

    beforeEach(() => {
    card1 = new Card(15, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], 'object')
    card2 = new Card(23, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
    card3 = new Card(38, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
    })

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should have a method that returns the current Card', () => {
        expect(round.returnCurrentCard()).to.equal(deck.cardList[0])
    })

    it('should update the turn count regardless of whether the guess is correct or not', () => {
        expect(round.turns).to.equal(0)
        round.takeTurn('mutator method')
        round.takeTurn('iterator method')
        round.takeTurn('mutator method')
        expect(round.turns).to.equal(3)
    })
    it('should cycle through cards in the deck', () => {
        expect(round.returnCurrentCard()).to.equal(deck.cardList[0])  
        round.takeTurn()
        expect(round.returnCurrentCard()).to.equal(deck.cardList[1]) 
        round.takeTurn()
        expect(round.returnCurrentCard()).to.equal(deck.cardList[2])
    })

    it('should store the IDs of questions that were answered incorrectly', () => {
        round.takeTurn('wrong guess')
        expect(round.incorrectGuesses).to.deep.equal([15])
        round.takeTurn('wrong guess')
        expect(round.incorrectGuesses).to.deep.equal([15, 23])
        round.takeTurn('wrong guess')
        expect(round.incorrectGuesses).to.deep.equal([15, 23, 38])
  })

    it('should return feedback on whether the guess was correct or incorrect', () => {
        expect(round.takeTurn('object')).to.equal('Correct!')
        expect(round.takeTurn('object')).to.equal('Incorrect!')
        expect(round.takeTurn('mutator method')).to.equal('Correct!')
    })

    it('should calculate percentage of correct answers', () => {
        expect(round.calculatePercentCorrect()).to.equal(0)
        round.takeTurn('object')
        expect(round.calculatePercentCorrect()).to.equal(100)
        round.takeTurn('object')
        expect(round.calculatePercentCorrect()).to.equal(50)
        round.takeTurn('mutator method')
        expect(round.calculatePercentCorrect()).to.equal(67)
    })

    it('should have a method that prints an end of round message', () => {
        round.takeTurn('object')
        expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
        round.takeTurn('object')
        expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!')
        round.takeTurn('mutator method')
    })
})
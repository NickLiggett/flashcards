const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let turn1
  let turn2
  let card1
  let card2

  beforeEach(() => {
    card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
    card2 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
    turn1 = new Turn('array', card1)
    turn2 = new Turn('function', card1)
  })

    it('should be a function', function() {
      expect(Turn).to.be.a('function');
    });
  
    it('should be an instance of Turn', function() {
      expect(turn1).to.be.an.instanceof(Turn);
    }); 
  
    it('should be able to hold a guess and the current card as arguments', function() {
      expect(turn1.guess).to.equal('array')
      expect(turn1.card).to.equal(card1)
    })

    it('should have a method that returns a guess', function() {
      expect(turn1.returnGuess()).to.equal('array')
    })

    it('should have a method that returns the current card', function() {
        expect(turn1.returnCard()).to.equal(card1)
      })

    it('should have a method that evaluates whether the guess is correct', function() {
        expect(turn1.evaluateGuess()).to.equal(true)
        expect(turn2.evaluateGuess()).to.equal(false)
    })
    
    it('should have a method that gives feedback', function() {
        turn1.evaluateGuess()
        turn2.evaluateGuess()
        expect(turn1.giveFeedback()).to.equal('Correct!')
        expect(turn2.giveFeedback()).to.equal('Incorrect!')
    })
  })
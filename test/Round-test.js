const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
    let round
    beforeEach(() => {
        round = new Round()
    })

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceof(Round);
    });

    
})
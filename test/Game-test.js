const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game.js')
const data = require('../src/data');
const Round = require('../src/Round');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');


describe('Game', () => {
    let game = new Game()
    console.log(new Round(prototypeQuestions))
})
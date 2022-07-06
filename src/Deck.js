class Deck {
   constructor(cards) {
    this.cardList = cards
   }
   countCards() {
    return this.cardList.length
   }
}
module.exports = Deck
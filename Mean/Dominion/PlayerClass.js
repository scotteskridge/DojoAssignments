

class Player {
  constructor(name) {
    this.name = name
    this.actions = 1
    this.buys = 1
    this.coins = 0
    this.score = 0
    this.deck = []
    this.hand = []
    this.played_cards = []
    this.discard = []
  }
  update_score(){

    return this.score
  }
}

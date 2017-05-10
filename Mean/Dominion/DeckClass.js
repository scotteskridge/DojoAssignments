class Deck {
  constructor(){
    this.cards = []
  }
  starter_deck(){
    for (var i = 0; i < 7; i ++){
      this.cards.push(new Copper)
    }
    for (var i = 0; i < 3; i ++){
      this.cards.push(new Estate)
    }
  }

  shuffle(){
    for(var i = 0; i <deck.length; i++){
      var j = Math.floor(Math.random()*deck.length)
      var temp = deck[j]
      deck[j] = deck[i]
      deck[i] = temp
    }
  }

  draw(){
    return this.cards.pop()
  }
}

// class Card{
//   constructor(){
//    this.Cost = 0;
//    this.Victory_Povars = 0;
//    this.Type; // Action, Victory, Action - Attack, Action - Reaction, Treasure
//    this.Name;
//   //  this.Ability; //This might need to be an object with methods?
//    this.More_Actions;
//    this.More_Buys;
//    this.Coins = 0;
//    this.Draws;
//    this.Description;
//   }
//
//   // OnPlay(player){
//   //   Console.log(`${player.Name} played a ${this.Name}`);
//   // }
//
// }

class Copper {

  constructor(){
    this.Cost = 1;
    this.Victory_Points = 0;
    this.Type = "Treasure";
    this.Name = "Copper";
    this.More_Actions = 0;
    this.More_Buys = 0;
    this.Coins = 1;
    this.Draws = 0;
    this.Description = `A ${this.Name} gives ${this.Coins} coins`;
   }
}

class Estate {
  constructor(){
    this.Cost = 2;
    this.Victory_Points = 1;
    this.Type = "Victory";
    this.Name = "Estate";
    this.More_Actions = 0;
    this.More_Buys = 0;
    this.Buying_Power = 0;
    this.Draws = 0;
    this.Description = `An ${this.Name} is worth 1 Victory Point`
  }
}

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
    for(var i = 0; i <this.cards.length; i++){
      var j = Math.floor(Math.random()*this.cards.length)
      var temp = this.cards[j]
      this.cards[j] = this.cards[i]
      this.cards[i] = temp
    }
  }

  draw(){
    return this.cards.pop()
  }
}

var scottsdeck = new Deck
scottsdeck.starter_deck()
scottsdeck.shuffle()

console.log(scottsdeck.cards)
console.log(scottsdeck.draw())

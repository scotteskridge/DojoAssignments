// finish getting the game state setup with a player haveing 10 cards and be abel to display and draw those cards to hand
var game_over = false
var game_start = true



var players = []
var current_player = 0
var phase = ["Action" , "Buy" , "Cleanup"]
var current_phase = 0

if (!game_over){
  console.log("Game Over the winner is Scott")
}
function next_player(){
  current_player +=1
  if (current_player == players.length){
    current_player = 0
  }
  $('#current_player').html(players[current_player].name)
  $('#deck_count').html(players[current_player].deck.length)
  $('#discard_count').html(players[current_player].discard.length)
  $('#actions').html(players[current_player].actions)
  $('#buys').html(players[current_player].buys)
  $('#coins').html(players[current_player].coins)
  return current_player
}

function next_phase(){
  current_phase +=1
  if (current_phase == phase.length){
    current_phase = 0
  }
  return current_phase
}

function update_score(){

}


$(document).ready(function(){
  //start game loop if game start is true
  if (game_start){
    var num_players = prompt("Please enter the number of new players:")
    for (var i = 0; i < num_players; i++){
      var name = prompt("Please enter the players name:")
      var player = new Player(name)
      players.push(player)
    }
    $('#current_player').html(players[current_player].name)
    $('#current_phase').html(phase[current_phase])
    $('#deck_count').html(players[current_player].deck.length)
    $('#discard_count').html(players[current_player].discard.length)
    $('#actions').html(players[current_player].actions)
    $('#buys').html(players[current_player].buys)
    $('#coins').html(players[current_player].coins)
    for (var i = 0; i < num_players; i++){
      var list_item = (`<li>${players[i].name}'s score: ${players[i].score}</li>`)
      $('#score_board').append(list_item)
    }
  }

  //stay in game loop until game_over is true

  //advance phase
  $('#next_phase').click(function(){
    next_phase()
    $('#current_phase').html(phase[current_phase])
  })

  //once game_over is true tally score and display winner

  // display players turn
  $('#current_player').click(function(){
    next_player()
    $('#current_player').html(players[current_player].name)
  });

  //count donw cards as you buy from piles
  var card_count = 10;
  var countDisplay = $('.coppers')
  var clickme = $('.click')
  clickme.click(function(){
    card_count -= 1;
    countDisplay.html(card_count)
  });
});

using System;
using System.Collections.Generic;

namespace Deck_Of_Cards{
    public class Program{
        public static void Main(){
        // public List<Card> myHand = new List<Card>();
           Deck bicycle = new Deck();
           bicycle.Shuffle();
           Player scott = new Player("Scott", bicycle );
           foreach(var card in bicycle.Deal(5, scott)){
               System.Console.WriteLine($"your card is the {card.card_name} of {card.card_suit} with a value of {card.card_value} and deck size is {bicycle.size_of_deck}");
           }
            scott.draw_card();
            scott.draw_card();
            scott.draw_card();
            System.Console.WriteLine($"{scott.player_name} has {scott.hand_size} cards in hand his cards are :" );
            foreach(var card in scott.player_hand){
                System.Console.WriteLine($"your card is the {card.card_name} of {card.card_suit} with a value of {card.card_value} and deck size is {scott.hand_size}");
           }
           scott.discard_card(3);
           System.Console.WriteLine($"{scott.player_name} has {scott.hand_size} cards in hand his cards are :" );
            foreach(var card in scott.player_hand){
                System.Console.WriteLine($"your card is the {card.card_name} of {card.card_suit} with a value of {card.card_value} and deck size is {scott.hand_size}");
           }

          
            

        //    System.Console.WriteLine(bicycle);
        //    foreach (var card in bicycle.cards){
        //        System.Console.WriteLine($"your card is the {card.card_name} of {card.card_suit} with a value of {card.card_value} and deck size is {bicycle.size_of_deck}");
            // }
         }
    }
}


using System.Collections.Generic;

namespace Deck_Of_Cards{
    public class Player{
        public string player_name;
        public List<Card> player_hand = new List<Card>();
        public Deck player_deck;
        public int hand_size = 0;

        public Player(string name, Deck deck){
            player_name = name; 
            player_deck = deck;           
        }
        public Card draw_card(){
            Card drawn_card= player_deck.Draw();
            player_hand.Add(drawn_card);
            hand_size++;
            // Card drawn_card = deck_name.cards[deck_name.size_of_deck-1];
            return drawn_card;
        }
        public Card discard_card(int num){
            if (num > hand_size || num <=0 ){
                System.Console.WriteLine("Please select a card in your hand");
                return null;
            }
            Card discard_card = player_hand[num-1];
            player_deck.discard.Add(discard_card);
            player_hand.RemoveAt(num-1);
            hand_size--;
            // Card drawn_card = deck_name.cards[deck_name.size_of_deck-1];
            return discard_card;
        }

        
    }
}
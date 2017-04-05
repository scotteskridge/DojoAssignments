using System;
using System.Collections.Generic;

namespace Deck_Of_Cards{
    public class Deck{
        public List<Card> cards = new List<Card>();
        public List<Card> discard = new List<Card>();
        public int size_of_deck = 0;
        public Deck(){
            for (int i = 1; i <=52; i++){
                if (i <= 13){
                    cards.Add(new Card("Hearts", (i%13)+1));
                }else if (i <= 26){
                    cards.Add(new Card("Diamonds", (i%13)+1));
                }else if (i <= 39){
                    cards.Add(new Card("Spades", (i%13)+1));
                }else if (i <= 52){
                    cards.Add(new Card("Clubs", (i%13)+1));
                } 
                size_of_deck++;     
            }
        }
        public List<Card> Deal(int val, Player player){ //val will deal the top number of cards into a list
            List<Card> dealt_cards = new List<Card>();
            if (val > size_of_deck){
                System.Console.WriteLine("Draw fewer cards");
            } else{
                for (int i = 0; i <= val-1; i += 1){
                    player.player_hand.Add(cards[size_of_deck-1]);
                    player.hand_size++;
                    dealt_cards.Add(cards[size_of_deck-1]);
                    cards.RemoveAt(size_of_deck-1);
                    size_of_deck--;
                }
            }
            return dealt_cards; 
        }
        public Card Draw(){
            Card drawn_card = cards[size_of_deck-1];
            cards.RemoveAt(size_of_deck-1);
            size_of_deck--;
            return drawn_card;
        }

        public void Shuffle(){
            Random rand = new Random();
           
            for (int i = size_of_deck-1; i >= 0; i--){
                int j =rand.Next(0,i);
                Card tempCard = cards[i]; 
                cards[i]= cards[j];
                cards[j]= tempCard;
            }
        }
        
        
    }
}
namespace Deck_Of_Cards
{
    public class Card{
        public string card_name;
        public string card_suit;
        public int card_value; 

        public Card(string suit, int value){
            card_suit = suit;
            card_value = value;
            if (value >= 1 && value <=9 ){
                card_name = (value+1).ToString();
            } else if(value == 10){
                card_name = "Jack";
            } else if(value == 11){
                card_name = "Queen";
            }else if(value == 12){
                card_name = "King";
            }else if(value == 13){
                card_name = "Ace";
            }
        }

        
    }
}
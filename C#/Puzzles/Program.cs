using System;

namespace ConsoleApplication
{
    public class Program
    {

        
        public static void RandArray(){
           int[] randArray = new int[10];
           Random randnum = new Random();
           int min = int.MaxValue;
           int max =int.MinValue;
           int sum = new int();
           foreach (int num in randArray){
               randArray[num] = randnum.Next(5,26);
               sum += randArray[num];
               if (randArray[num]<min){
                   min = randArray[num];
               }
               if (randArray[num]>max){
                   max = randArray[num];
               }
              
           } 
          
           Console.WriteLine("The sum is: {0}, the min is: {1}, the max is: {2}. ", sum, min, max);



        }
        public static string TossCoin(Random randomize){
           Console.WriteLine("Tossing a coin");
            string flip = "";
            if (randomize.Next(0,2) == 0){
                flip = "Heads";
            } else{
                flip = "Tails";
            }           
            return flip;  
        }
        public static string TossManyCoin(int num){
           Console.WriteLine("Counting Heads and tails");
            int heads = new int();
            int tails = new int();
            Random randomize = new Random();
            for (int i = 1; i <= num; i ++){
                if (TossCoin(randomize) == "Heads"){
                    heads++;
                }
                else{
                    tails++;
                }
            }
            double ratio = (double)heads/num;
            return ($"Your rations of heads to tails is {heads}:{tails} or {ratio}% ");
        }
        public static void Names(){
            Console.WriteLine("You called Names");
        }

        public static void Main(string[] args)
        {
            Random randomize = new Random();
            RandArray();
            Console.WriteLine(TossCoin(randomize));
            System.Console.WriteLine(TossManyCoin(10)); 
            Names();
        }
    }
}

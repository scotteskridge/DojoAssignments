using System;

namespace ConsoleApplication
{
   
    public class Program
    {
        
        public static void Main(string[] args){
          
           countto255();
           threesAndFives();
           fizzBuzz();
           randword();


        }
        
        public static void print(int val){
            Console.WriteLine(val);
        }
        public static void countto255()
            {
                for ( int i = 1; i <=255; i++)
                {
                  print(i);
                }


            }

        public static void threesAndFives(){
            for ( int i = 1; i <=100; i++){
                if (i % 5 == 0 && i % 3 == 0){

                }else if (i%5 ==0) {
                    Console.WriteLine(i);
                }else if (i%3 ==0) {
                    Console.WriteLine(i);
                }
            }
        }

         public static void fizzBuzz(){
            for (int i = 1; i <= 100; i ++)
                if (i % 5 == 0 && i % 3 == 0){
                    Console.WriteLine("FizzBuzz");
                }else if (i%5 ==0) {
                    Console.WriteLine("Buzz");
                }else if (i%3 ==0) {
                    Console.WriteLine("Fizz");
                }
            }
        
        public static void randword(){
            Random whateveriwant = new Random();
            for (int i = 1; i <= 100; i++){
               Console.WriteLine("Your count is: " + i + " your random num is: " + whateveriwant.Next(1,101));
            }
        }
    }
}
       

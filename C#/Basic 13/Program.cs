using System;

namespace ConsoleApplication{
    public class Program{
        public static void Main(string[] args){
            int[] newArray = new int[] {1,3,5,7,9,13};
        //    print1to255();
        //    printsum();
           iteratearray(newArray);
           System.Console.WriteLine(findmax(newArray));
          
        }
         public static void print1to255(){
             for (int i = 1; i <=255; i++){
                 System.Console.WriteLine(i);
             }

         }
         public static void printsum(){
             int sum = new int();
              for (int i = 1; i <=255; i++){
                 sum += i;
                 System.Console.WriteLine($"New number: {i} sum: {sum}");
             }
             
         }
         public static void iteratearray(int[] arr){
            //  int[] myArray = new int[6];
            
            foreach (int num in arr){
                System.Console.WriteLine(num);

             } 
             
         }
         public static int findmax(int[] arr){
            int max = arr[0];
             foreach (int num in arr){
                if (num > max ){
                    max = num;
                }
             }
            return max;
         }
         public static int findmin(int[] arr){
            int min = arr[0];
             foreach (int num in arr){
                if (num > min ){
                    min = num ;
                }
             }
            return min;
         }
         public static double getavg(int[] arr){
             int sum = 0;
             foreach (int num in arr){
                if (num > sum ){
                    sum += num ;
                }
             }
            return (double)sum/arr.Length;
             
         }
         public static void onlyodds(){
             
         }
         public static void greaterThanY(){
             
         }
         public static void SquareTheValues(){
             
         }
         public static void NoNegs(){
             
         }
         public static void MinMaxAvg(){
             
         }
         public static void ShiftArr(){
             
         }
         public static void NumtoStr(){
             
         }
       


    }
}

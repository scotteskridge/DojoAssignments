using System;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Human scott = new Human("Scott");
            Human andy = new Human("Andy");
            Mob bear = new Mob("Bear");
            Console.WriteLine(bear.health);
            scott.Attack(bear);
            scott.Attack(andy);
            
        }
    }
}

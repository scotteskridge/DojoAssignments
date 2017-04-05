using System;

namespace ConsoleApplication{

    public class Human:GameObject{
        public string name;
        public int strength;
        public int intelligence;
        public int dexterity;
        public int health;
        
        public Human(string objname){
            name = objname;
            strength = 3;
            intelligence = 3;
            dexterity = 3;
            health = 100; 
            }
        public Human(string objname, int str, int intel, int dex, int hp){
            name = objname;
            strength = str;
            intelligence = intel;
            dexterity = dex;
            health = hp;
        }
        public void Attack(Object t){
            if (t is Mob){
                Mob target = t as Mob;
                target.health -= strength * 5;
                System.Console.WriteLine($"{target.name}'s health is now {target.health}");

            }
            if (t is Human){
                Human target = t as Human;
                target.health -= strength * 5;
                System.Console.WriteLine($"{target.name}'s health is now {target.health}");

            }
        }            
    }
}
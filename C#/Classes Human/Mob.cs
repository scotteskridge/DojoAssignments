using System;

namespace ConsoleApplication{

    public class Mob{
        public string name;
        public int strength;
        public int intelligence;
        public int dexterity;
        public int health;
        
        public Mob(string objname){
            name = objname;
            strength = 1;
            intelligence = 1;
            dexterity = 1;
            health = 50; 
            }
        public Mob(string objname, int str, int intel, int dex, int hp){
            name = objname;
            strength = str;
            intelligence = intel;
            dexterity = dex;
            health = hp;
        }
        public void Attack(Object t){
            
            Mob target = t as Mob;
            target.health -= strength * 5;
        }            
    }
}
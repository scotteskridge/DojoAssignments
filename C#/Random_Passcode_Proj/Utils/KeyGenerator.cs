using System;

namespace MVCtemplate{ 
 public class KeyGenerator
    {
        public static string GeneratePW(int? maxSize){
        string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        char[] stringChars = new char[(int)maxSize];
        Random random = new Random();

        for (int i = 0; i < stringChars.Length; i++)
        {
            stringChars[i] = chars[random.Next(chars.Length)];
        }

        return new string(stringChars);
        }

    }
}
// VerifyPassword.cs
using System;
using BCrypt.Net;

class VerifyPassword
{
    static void Main(string[] args)
    {
        if (args.Length < 2)
        {
            Console.WriteLine("Usage: dotnet run --project . <plainPassword> <bcryptHash>");
            return;
        }
        var password = args[0];
        var hash = args[1];

        bool ok = BCrypt.Net.BCrypt.Verify(password, hash);
        Console.WriteLine(ok ? "MATCH" : "NO MATCH");
    }
}


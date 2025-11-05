// Program.cs
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using DeutschPath.Models;
using DeutschPath.Services;

var builder = WebApplication.CreateBuilder(args);

// DbContext (reads DefaultConnection from appsettings.json)
builder.Services.AddDbContext<DeutschPathDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// CORS for Vite dev server
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowDevFrontends", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
    //Enable for production GitHub Pages hosting
    options.AddPolicy("AllowGithubPages", policy =>
    {
        policy.WithOrigins("https://supritvaidya.github.io")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register AuthService
builder.Services.AddScoped<IAuthService, AuthService>();

// JWT config
var jwtSection = builder.Configuration.GetSection("Jwt");
var jwtKey = jwtSection.GetValue<string>("Key");
if (string.IsNullOrEmpty(jwtKey))
{
    throw new InvalidOperationException("JWT Key is not configured. Set Jwt:Key in configuration or env vars.");
}
var keyBytes = Encoding.UTF8.GetBytes(jwtKey);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false; // set to true in production
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidateLifetime = true,
        ValidIssuer = jwtSection.GetValue<string>("Issuer"),
        ValidAudience = jwtSection.GetValue<string>("Audience"),
        IssuerSigningKey = new SymmetricSecurityKey(keyBytes)
    };
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowViteDev");

if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowDevFrontends");
}
else
{
    app.UseCors("AllowGithubPages");
}

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

// ---------- DEV: ensure test user exists or update their password (remove after use) ----------
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<DeutschPathDbContext>();

    // Replace this email with the email you tried to log in with:
    var emailToSet = "alex.meier@example.com";
    var plainPassword = "password123"; // the password you will test with

    var user = db.Users.SingleOrDefault(u => u.Email.ToLower() == emailToSet.ToLower());
    if (user == null)
    {
        // create a new user with the password
        var hash = BCrypt.Net.BCrypt.HashPassword(plainPassword);
        db.Users.Add(new DeutschPath.Models.User
        {
            Id = Guid.NewGuid(),
            Name = "DevTemp User",
            Email = emailToSet,
            PasswordHash = hash,
            CurrentLevel = "A1",
            CreatedAt = DateTime.UtcNow
        });
        db.SaveChanges();
        Console.WriteLine($"Seeded new user {emailToSet} with password: {plainPassword}");
    }
    else
    {
        // update existing user's password to the known hash
        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(plainPassword);
        db.SaveChanges();
        Console.WriteLine($"Updated password for {emailToSet} to: {plainPassword}");
    }
}
// ---------- END DEV SEED ----------



app.Run();

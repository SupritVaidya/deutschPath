
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using DeutschPath.Models;
using DeutschPath.Services;

// Load environment variables from .env file (requires DotNetEnv NuGet package)
DotNetEnv.Env.Load();

var builder = WebApplication.CreateBuilder(args);

// Force listening URL (HTTPS only) — dev only
builder.WebHost.UseUrls("https://localhost:7114");

// Prefer environment variable, fallback to appsettings.json
var connectionString = Environment.GetEnvironmentVariable("ConnectionStrings__DefaultConnection")
    ?? builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<DeutschPathDbContext>(options =>
    options.UseSqlServer(connectionString, sqlOptions =>
        sqlOptions.EnableRetryOnFailure()
    )
);

// CORS: allow only the single dev origin for HTTPS 7114
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowDevFrontends", policy =>
    {
        policy.WithOrigins(
            "https://localhost:7114",
            "http://localhost:3000",
            "http://localhost:5173",
            "https://localhost:3000",
            "https://localhost:5173"
        )
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials();
    });
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
    options.RequireHttpsMetadata = false;
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

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

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
    var emailToSet = "alex.meier@example.com";
    var plainPassword = "password123";
    var user = db.Users.SingleOrDefault(u => EF.Functions.Like(u.Email, emailToSet));
    if (user == null)
    {
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
        user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(plainPassword);
        db.SaveChanges();
        Console.WriteLine($"Updated password for {emailToSet} to: {plainPassword}");
    }
}
// ---------- END DEV SEED ----------

app.Run();

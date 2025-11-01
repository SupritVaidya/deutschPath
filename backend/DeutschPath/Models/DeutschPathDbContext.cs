using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using DeutschPath.Models;   // <-- use Models namespace because your DbContext lives here

namespace DeutschPath.Models;

public partial class DeutschPathDbContext : DbContext
{
    public DeutschPathDbContext()
    {
    }

    public DeutschPathDbContext(DbContextOptions<DeutschPathDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<LessonProgress> LessonProgresses { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<Course> Courses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Only configure the DB here if no options were provided by DI.
        // This keeps the connection string out of source and lets Program.cs supply it.
        if (!optionsBuilder.IsConfigured)
        {
            // Fallback for design-time tools (EF scaffolding/migrations).
            // Use a named connection from configuration or a local dev fallback.
            optionsBuilder.UseSqlServer("Name=ConnectionStrings:DefaultConnection");
        }
    }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<LessonProgress>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__LessonPr__3214EC07871480D5");

            entity.ToTable("LessonProgress");

            entity.HasIndex(e => new { e.UserId, e.LessonId }, "UQ_User_Lesson").IsUnique();

            entity.Property(e => e.CompletedAt).HasDefaultValueSql("(getutcdate())");
            entity.Property(e => e.LessonId).HasMaxLength(50);

            entity.HasOne(d => d.User).WithMany(p => p.LessonProgresses)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK_LessonProgress_Users");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC077F2AE8D2");

            entity.HasIndex(e => e.Email, "UQ_Users_Email").IsUnique();

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
            entity.Property(e => e.AvatarUrl).HasMaxLength(500);
            entity.Property(e => e.CreatedAt).HasDefaultValueSql("(getutcdate())");
            entity.Property(e => e.CurrentLevel)
                .HasMaxLength(2)
                .HasDefaultValue("A1");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(100);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

# 📘 Understanding JPA, Hibernate, and Spring Data JPA — A Simple Demo Project

Welcome!  
This project is a beginner-friendly example to help you understand the **differences** and **relationships** between:

- **JPA (Java Persistence API)**
- **Hibernate**
- **Spring Data JPA**

We’ll explore each one using a simple Spring Boot app that stores and retrieves `Student` records using an in-memory database (H2).

---

## What's the difference?

Let’s break it down in simple terms:

| Concept             | What it is                                                | Think of it like...                                                                                                      |
| ------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **JPA**             | A **specification** – a set of rules and interfaces.      | A blueprint or contract for working with databases using Java objects.                                                   |
| **Hibernate**       | An **implementation** of the JPA specification.           | The worker that actually does the job according to JPA's rules.                                                          |
| **Spring Data JPA** | A **Spring project** that sits on top of JPA & Hibernate. | Your helpful assistant – it reduces boilerplate code and gives you ready-to-use methods like `save()`, `findAll()`, etc. |

> **In short**:  
> You write code using **JPA annotations**, Spring Boot uses **Hibernate** internally to execute it, and **Spring Data JPA** makes your life easier by writing the repetitive code for you.

---

## How it works in this project

This is how the pieces fit together:

- You define a `Student` class using **JPA annotations** like `@Entity` and `@Id`.
- You create a `StudentRepository` that extends `JpaRepository`. No need to write SQL!
- Spring Boot automatically uses **Hibernate** to handle the database operations.
- Everything is wired together and runs using **Spring Data JPA** behind the scenes.

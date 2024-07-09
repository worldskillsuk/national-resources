# 4 - Back-End Development

## Introduction

In this module, you will be required to create an application programming interface (API) following a set of client requirements.

You can write your solution in JS, PHP, and SQL. You can use any allowed libraries or frameworks (e.g., Laravel) if you prefer. You can mock requests to your API using software such as Postman.

You have 3 hours for this task.

## Task Requirements

You are tasked with building a secure API for an online bookstore. The API is expected to grow over time and right now the owner only needs a subset of the required features.

Nametly, the API should allow users to log in, manage their profile, browse books and maintain a reading list. Purchasing books is outside the scope of this initial work.

The focus of this task is on data retrieval and manipulation rather than aesthetics. As such, there is no expectation for you to create a user interface (UI). Follow the [API specification](media/api.md) and implement as much of the functionality as possible.

### Authentication

Implement user registration, login and logout functionality.

Use secure password hashing or encryption techniques.

Use (bearer) token authentication. Each token should be randomly generated for each user that requests one.

### Database Operations

Create a database schema for storing user information (e.g., name, username and password) and book information (e.g., title, author, genre and price).

Use a relational database (e.g., MySQL, PostgreSQL) to store user profiles and book data.

Create tables, define relationships and populate the database using some initial data.

Implement queries for retrieving book information based on user preferences (e.g., genre, author).

To speed up the development time, you have been provided with some [sample data](media/sample-data). You can use and modify the rows as you wish. Alternatively, you can enter your own data to demonstrate that your API and database work.

However, for testing purposes, it must be possible to log in with "password" as the user's `password` value.

### Security

You must offer a good level of security for your application.

Validate user input so that data can be entered safely. Implement appropriate error handling.

Protect against common security vulnerabilities (e.g., SQL injection).

### Media Files

Media files can be found in the [media](media) folder.

## Instructions

- Aim to meet all the requirements set out.
- Implement security measures as appropriate.
- Write descriptive comments to assist other developers in understanding your code.
- Make use of the provided media files where required.

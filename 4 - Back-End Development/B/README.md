# 4 - Back-End Development

## Introduction

In this module, you will be required to create a website following a set of client requirements.

You can write your solution in JS, PHP and SQL. You can use any allowed libraries or frameworks (e.g., Laravel) if you prefer.

You have 3 hours for this task.

## Task Requirements

You are tasked with building a user management system that allows users to register, log in and manage a profile.

The user management system should handle session management, authentication and database operations.

### Design

The visual appeal of the user management system is not important for this task. Rather, emphasis is to be placed on data.

You should ensure that sensibly structure your project with a clear information architecture.

The content must be accessible so that all users, including screen reader users, can use the user management system with ease. At minimum, you should aim to write valid, semantic HTML and use correct label-input associations.

To speed up the development time, you have been provided with some [sample pages](media/sample-pages). These currently contain mistakes and do not provide the needed functionality.

You should edit the pages' HTML and add additional scripts to add functionality to the user management system.

You are also free to style the pages as you wish, but this should not be a priority.

### Paths

At minimum, the user management system should provide the following paths:

- `/login`, a page for logging in \*;
- `/register`, a page for registering a profile \*; and
- `/profile`, a page for viewing and editing a profile \*\*.

You should provide additional paths, such as one for a landing page, to enhance the flow of the user management system.

\* This path must not be accessible when a user is logged in. If a user navigates to this path when logged in, they must be redirected to `/profile`.

\*\* This path must not be accessible when a user is not logged in. If a user is not logged in, they must be redirected to `/login`.

### Logging In

To log in, users with a profile must be able to submit a form with their username and password filled.

### Registration

To create a profile, users must be able to submit a form with their name, username and password filled.

### Profile Management

To edit their profile, users must be able to submit a form with their name or profile picture

When submitted, only the data related to the changed fields should update.

### Logging Out

Users must be able to log out of their profile and end their current session.

Upon a successful log out, the user must be redirected to `/login`.

### Database Operations

Create a database schema for storing user profile information (e.g., username, password, name and profile picture).

Use a relational database (e.g., MySQL, PostgreSQL) to store user profiles.

Create at least one table with appropriate column names, data types and indexes (if applicable).

For testing purposes, it must be possible to log in with "password" as all users' `password` value.

### Validation

Implement appropriate client-side and server-side validation to ensure users submit data correctly.

The user management system requires a few rules for registration and for editing profiles.

Names must only contain alphanumeric characters.

Usernames:

- must be at least 5 characters long; and
- must only contain alphanumeric characters.

Passwords:

- must be at least 8 characters long;
- must contain at least one uppercase character (_A_ to _Z_);
- must contain at least one lowercase characgter (_a_ to _z_);
- must contain at least one number (_0_ to _9_); and
- must contain at least one special character (_\-_, _\*_ or \_\#\_).

Profile pictures:

- must be 2 MB or under in size; and
- must be in a JPEG, PNG or WebP file format.

### Security

You must offer a good level of security for the user management system.

Escape user input so that data can be entered safely. Implement appropriate error handling.

Protect against common security vulnerabilities (e.g., SQL injection).

### Media Files

Media files can be found in the [media](media) folder.

## Instructions

- Aim to meet all the requirements set out.
- Implement security measures as appropriate.
- Write descriptive comments to assist other developers in understanding your code.
- Make use of the provided media files where required.

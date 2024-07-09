# API Specification

## Common

### Format

Your API should work with and return JSON data.

You may explictly enforce the `Accept` and `Content-Type` headers as follows:

- `Accept: application/json`
- `Content-Type: application/json`

### Errors

In the case of error, all endpoints must be able to return an appropriate error code. The response contents should also include an error message.

For example, in the case of a validation error (`422 Unprocessable Entity`), the response could contain:

```json
{
  "message": "Validation failed. Please check your input and try again"
}
```

Most routes require users to be authenticated against the API by sending a token in a header, e.g.,

```
Bearer Token: abcdefghiklmnopqrstuvwxyz
```

## Authentication

The routes for registering or logging in do not require users to be logged in and so can be accessed without a bearer token.

The route for logging out requires users to already be logged in and so must have a bearer token header sent as part of the request.

### Registration

Endpoint: `/api/register`

Method: `POST`

Body:

```json
{
  "name": "string",
  "username": "string",
  "password": "string"
}
```

Success Response (`201 Created` - user registered successfully):

```json
{
  "token": "string"
}
```

Error Response (`409 Conflict` - user already exists):

```json
{
  "message": "A user with this username already exists."
}
```

### Log In

Endpoint: `/api/login`

Method: `POST`

Body:

```json
{
  "username": "string",
  "password": "string"
}
```

Success Response (`200 OK` - login successful):

```json
{
  "token": "string"
}
```

Error Response (`401 Unauthorized` - invalid username and password):

```json
{
  "message": "Invalid username or password."
}
```

### Log Out

Endpoint: `/api/logout`

Method: `POST`

Body: No specific data

Success Response (`204 No Content` - login successful): Empty

Error Response (`401 Unauthorized` - user not logged in):

```json
{
  "message": "You are not logged in."
}
```

## Books

Users should be logged in to be able to access data about books. Each route requires a bearer token to be sent as a header as part of the request.

### Get All Books

Endpoint: `/api/books`

Method: `GET`

Header: `Bearer Token: ...`

Success Response (`200 OK` - all books fetched):

```json
[
  {
    "id": "number",
    "title": "string",
    "author": "string",
    "price": "number"
  }
]
```

### Get Single Book

Endpoint: `/api/books/{book_id}`

Method: `GET`

Header: `Bearer Token: ...`

Success Response (`200 OK` - single book fetched):

```json
{
  "id": "number",
  "title": "string",
  "author": "string",
  "price": "number"
}
```

## Reading List

Users should be logged in to be able to access their reading list. Each route requires a bearer token to be sent as a header as part of the request.

Users should only be able to access their own reading list.

### Get Reading List

Endpoint: `/api/users/{user_id}/reading-list`

Method: `GET`

Success Response (`200 OK` - reading list fetched):

```json
[
  {
    "book_id": "number",
    "created_at": "datetime"
  }
]
```

Error Response (`401 Unauthorized` - reading list not owned by the logged in user):

```json
{
  "message": "You do not have permission to view this reading list."
}
```

### Add Book to Reading List

Endpoint: `/api/users/{user_id}/reading-list`

Method: `POST`

Body:

```json
{
  "book_id": "number"
}
```

Success Response (`201 Created` - book added to reading list):

```json
{
  "book_id": "number",
  "created_at": "datetime"
}
```

Error Response (`409 Conflict` - book already exists in reading list):

```json
{
  "message": "This book already exists in your reading list."
}
```

Error Response (`401 Unauthorized` - reading list not owned by the logged in user):

```json
{
  "message": "You do not have permission to edit this reading list."
}
```

### Remove Book from Reading List

Endpoint: `/api/users/{user_id}/reading-list/{book_id}`

Method: `DELETE`

Success Response (`204 No Content` - book removed): Empty

Error Response (`400 Bad Request` - book does not exist in the reading list):

```json
{
  "message": "This book does not exist in your reading list."
}
```

Error Response (`401 Unauthorized` - reading list not owned by the logged in user):

```json
{
  "message": "You do not have permission to edit this reading list."
}
```

## User Profile

Users should be logged in to be able to access their profile. Each route requires a bearer token to be sent as a header as part of the request.

Users should only be able to access their own profile.

Passwords should not be exposed and so should not be returned in responses.

### Get User Profile

Endpoint: `/api/users/{user_id}`

Method: `GET`

Success Response (`200 OK` - user profile loaded):

```json
{
  "user_id": "number",
  "name": "string",
  "username": "string"
}
```

Error Response (`401 Unauthorized` - profile not owned by the logged in user):

```json
{
  "message": "You do not have permission to view this user profile."
}
```

### Update User Profile

Endpoint: `/api/users/{user_id}`

Method: `PATCH`

Body (may include `name` or `username`):

```json
{
  "name": "string",
  "username": "string"
}
```

Success Response (`200 OK` - user profile updated):

```json
{
  "name": "string",
  "username": "string"
}
```

Error Response (`401 Unauthorized` - profile not owned by the logged in user):

```json
{
  "message": "You do not have permission to view this user profile."
}
```

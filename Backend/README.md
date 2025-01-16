# User Registration API Documentation

## Endpoint: /users/register

### Overview
This endpoint allows new users to register in the system by providing their personal information.

### Method
`POST`

### URL
```
http://localhost:3000/api/users/register
```

### Request Body
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| email | string | Yes | User's email address | Must be a valid email format |
| fullname.firstname | string | Yes | User's first name | Minimum 3 characters |
| fullname.lastname | string | No | User's last name | Minimum 3 characters if provided |
| password | string | Yes | User's password | Minimum 8 characters |

### Request Body Example
```json
{
    "email": "user@example.com",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "password": "password123"
}
```

### Responses

#### Success Response
- **Status Code**: 201 (Created)
- **Content Example**:
```json
{
    "user": {
        "_id": "user_id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "user@example.com"
    },
    "token": "jwt_token_string"
}
```

#### Error Responses

1. Validation Error (400 Bad Request)
```json
{
    "errors": [
        {
            "msg": "Invalid email",
            "param": "email"
        },
        {
            "msg": "First name must be at least 3 characters long",
            "param": "fullname.firstname"
        }
    ]
}
```

2. Email Already Exists (400 Bad Request)
```json
{
    "error": "Email already exists"
}
```

### Response Examples

#### Successful Registration Response
```json
{
    "user": {
        "_id": "507f1f77bcf86cd799439011",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "createdAt": "2023-07-21T15:30:45.123Z",
        "updatedAt": "2023-07-21T15:30:45.123Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1MDdmMWY3N2JjZjg2Y2Q3OTk0MzkwMTEiLCJpYXQiOjE2MTY3NjY4MDB9.dKUJwZZrqQmd8h4DYmWXVQwEHN8U5lRGbYQ"
}
```

#### Error Response Examples

1. Missing Required Fields
```json
{
    "errors": [
        {
            "msg": "All fields are required",
            "param": "firstname"
        }
    ]
}
```

2. Invalid Email Format
```json
{
    "errors": [
        {
            "msg": "Invalid email",
            "param": "email",
            "value": "invalid-email"
        }
    ]
}
```

3. Password Too Short
```json
{
    "errors": [
        {
            "msg": "Password must be at least 8 characters long",
            "param": "password"
        }
    ]
}
```

4. Duplicate Email
```json
{
    "error": "Email already exists",
    "code": "DUPLICATE_EMAIL"
}
```

5. Server Error
```json
{
    "error": "Internal server error",
    "code": "SERVER_ERROR"
}
```

### Security
- Password is hashed using bcrypt before storing
- Returns JWT token for authentication
- Password is never returned in response

### Notes
- All timestamps are in ISO 8601 format
- Token should be included in subsequent requests as Bearer token
- Email must be unique in the system

# User Login API Documentation

## Endpoint: /users/login

### Overview
This endpoint authenticates existing users and provides a JWT token for subsequent requests.

### Method
`POST`

### URL
```
http://localhost:3000/api/users/login
```

### Request Body
| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| email | string | Yes | User's email address | Must be a valid email format |
| password | string | Yes | User's password | Minimum 8 characters |

### Request Body Example
```json
{
    "email": "user@example.com",
    "password": "password123"
}
```

### Responses

#### Success Response
- **Status Code**: 200 (OK)
- **Content Example**:
```json
{
    "user": {
        "_id": "507f1f77bcf86cd799439011",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "user@example.com",
        "createdAt": "2023-07-21T15:30:45.123Z",
        "updatedAt": "2023-07-21T15:30:45.123Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Error Responses

1. Invalid Credentials (401 Unauthorized)
```json
{
    "message": "Invalid email or password"
}
```

2. Validation Error (400 Bad Request)
```json
{
    "errors": [
        {
            "msg": "Invalid email",
            "param": "email",
            "value": "invalid-email"
        }
    ]
}
```

3. Server Error (500 Internal Server Error)
```json
{
    "error": "Internal server error",
    "code": "SERVER_ERROR"
}
```

### Security Notes
- Passwords are never returned in the response
- JWT token is required for protected routes
- Use Bearer token authentication scheme
- Token expiration is handled automatically
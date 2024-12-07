# VRV API Postman Collection

## Overview

This Postman collection provides a comprehensive set of endpoints for a user management and authentication system with role-based access control.

## Base URL

`localhost:3000`

## Authentication Endpoints

### User Registration

- **Endpoint:** `POST /auth/register`
- **Description:** Register a new user
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "role": "User/Moderator/Admin"
  }
  ```

### User Login

- **Endpoint:** `POST /auth/login`
- **Description:** Authenticate a user and receive a JWT token
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### Protected Route

- **Endpoint:** `GET /auth/protected`
- **Description:** Access a protected route (requires valid JWT token)
- **Authentication:** Bearer Token

## Role Management Endpoints

### Update User Role

- **Endpoint:** `PUT /roles/:id`
- **Description:** Update user permissions
- **Authentication:** Admin token required
- **Request Body:**
  ```json
  {
    "permissions": ["READ", "UPDATE"]
  }
  ```

### Get Roles

- **Endpoints:**
  - `GET /roles` (Get All Roles)
  - `GET /roles/:id` (Get Specific Role)

## User Management Endpoints

### User Operations

- **Get All Users:** `GET /users` (Admin only)
- **Get User by ID:** `GET /users/:id` (Admin only)
- **Update User:** `PUT /users/:id` (Admin only)
- **Delete User:** `DELETE /users/:id` (Admin only)

## Authentication Tokens

The collection includes pre-configured tokens for different roles:

- User Token
- Admin Token
- Moderator Token

## Authorization Levels

- **User:** Limited access
- **Moderator:** Intermediate access
- **Admin:** Full system access

## Postman Environment Variables

- `base_url`: API base URL
- `token`: User token
- `admin_token`: Admin authentication token
- `moderator_token`: Moderator authentication token

## Important Notes

- All protected routes require a valid JWT token
- Token expires after a set duration
- Role-based access control is implemented

## Recommended Testing Flow

1. Register a new user
2. Login to obtain a token
3. Use the obtained token for subsequent requests
4. Test different endpoints based on user role

## Security Considerations

- Always use HTTPS in production
- Protect your JWT tokens
- Implement proper error handling
- Validate and sanitize all input

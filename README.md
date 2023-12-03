# User Authentication and Management API

This Node.js application provides a simple API for user authentication and management. It uses Express.js for the server, MongoDB for data storage with Mongoose, and JWT for authentication.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)

## Introduction

This project handles user signup, login, and basic user management functionalities. It provides a RESTful API for user-related operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Bcrypt.js
- JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository

2. Install dependencies:
 -npm install

## API Endpoints

### Authentication Endpoints (/api/auth)
  - POST /signup: Register a new user.
  - POST /login: Log in and get an authentication token.
  - GET /logout: Log out and invalidate the authentication token.
### User Management Endpoints (/api/user)
  - POST /update/:id: Update user information (Requires authentication).
  - DELETE /delete/:id: Delete a user (Requires authentication).
  - GET /:id: Get user information (Requires authentication).

## Authentication
  - User authentication is handled using JWT (JSON Web Tokens). When a user logs in, a token is generated and stored in an 
    HTTP-only cookie for subsequent authenticated requests.

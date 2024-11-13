# Todo Web Application

## Objective
Develop a Todo Web Application that enables users to manage their daily tasks, track task status, and maintain their profile information. The application supports user authentication, task management, and profile management.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
  - [User Authentication](#user-authentication)
  - [Todo Management](#todo-management)
  - [User Profile Management](#user-profile-management)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)

## Technologies Used
- **Frontend:** ReactJS
- **Backend:** Node.js, Express.js
- **Authentication:** JSON Web Token (JWT)
- **Unique ID Generation:** UUID
- **Database Management:** SQLite3 or MongoDB

## Features

### User Authentication
- **Signup:** Users can register by providing necessary details.
- **Login:** Registered users can log in, receiving a JWT for authentication.
- **Protected Routes:** API routes are secured using JWT tokens, ensuring access only for authenticated users.

### Todo Management
- **CRUD Operations:** Users can Create, Read, Update, and Delete tasks.
- **Task Status:** Users can update task statuses as "done," "pending," "in progress," or "completed."

### User Profile Management
- **Profile CRUD:** Users can manage their profile, updating information like name, email, and password.
- **Authentication Restriction:** Profile updates are only accessible to the authenticated user.

## Installation

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/kranthikata/TodoApp.git
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables file ".env"
   ```bash
   JWT_SECRET=<your_secret>(Secret key for JWT authentication)
   ```
4. Run server
   ```bash
   node server.js
   ```
### Frontend Setup
1. Navigate to the frontend folder
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run
   ```bash
   npm start
   ```
## API Endpoints
### Authentication
- POST /api/auth/signup - Register a new user.
- POST /api/auth/login - Login and receive a JWT.
## Todo Management
- POST /api/todos - Create a new task.
- GET /api/todos - Retrieve list of tasks.
- PUT /api/todos/:id - Update an existing task.
- DELETE /api/todos/:id - Delete a task.
## Profile Management
- GET /api/profile - Retrieve authenticated user's profile.
- PUT /api/profile - Update authenticated user's profile.
- DELETE /api/profile - Delete authenticated user's account.
## Usage
- Signup - Create a new account.
- Login - Authenticate and receive access to protected routes.
- Task Management - Add, view, update, and delete tasks.
- Profile Management - Update profile details securely

### Note:
- Contact me if you face any difficulties: kranthikumarkata464@gmail.com 

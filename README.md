
This project is a Project Management Tool built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to sign up, log in, create projects, assign tasks, set deadlines, and track progress. The frontend is built with React and Material-UI, while the backend uses Node.js, Express, and MongoDB.

## Features

- User Authentication (Sign Up, Log In)
- Create, Read, Update, Delete (CRUD) Projects
- Create, Read, Update, Delete (CRUD) Tasks
- Responsive design with Material-UI
- Light/Dark Mode Toggle

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (Local or MongoDB Atlas)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/poornima1904/Project-Management.git
cd project-management-tool
```

### Install dependencies

#### Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

#### Frontend

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

### Set up environment variables

#### Backend

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the application

#### Backend

Navigate to the backend directory and start the server:

```bash
cd backend
npm start
```

#### Frontend

Navigate to the frontend directory and start the development server:

```bash
cd ../frontend
npm start
```

The backend server should be running on `http://localhost:5001` and the frontend development server on `http://localhost:3000`.

## Project Structure

### Backend

```
backend
├── controllers
│   └── authController.js
├── middleware
│   └── authMiddleware.js
│   └── errorMiddleware.js
├── models
│   └── userModel.js
├── routes
│   └── authRoutes.js
│   └── projectRoutes.js
│   └── taskRoutes.js
├── utils
│   └── generateToken.js
├── server.js
├── .env
└── package.json
```

### Frontend

```
frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── AddProjectModal.js
│   │   └── AddTaskModal.js
│   │   └── Navbar.js
│   │   └── Project.js
│   │   └── Task.js
│   │   └── ThemeSwitcher.js
│   ├── context
│   │   └── ThemeContext.js
│   │   └── UserContext.js
│   ├── pages
│   │   └── Login.js
│   │   └── Projects.js
│   │   └── Signup.js
│   │   └── Tasks.js
│   ├── App.js
│   ├── index.js
│   ├── theme.js
│   ├── App.css
│   └── index.css
├── .env
└── package.json
```

## Usage

1. **Sign Up**: Navigate to the signup page (`/signup`) and create a new account.
2. **Log In**: Navigate to the login page (`/login`) and log in with your credentials.
3. **Projects**: After logging in, navigate to the projects page (`/projects`) to view, create, update, and delete projects.
4. **Tasks**: Navigate to the tasks page (`/tasks`) to view, create, update, and delete tasks associated with projects.




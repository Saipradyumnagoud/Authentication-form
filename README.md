## Authentication Form 

### Overview
This project is a simple authentication form built using React for the frontend and Node.js with Express and MongoDB for the backend. It allows users to register by providing their name, email, and password, which are securely saved to a MongoDB database. The application is designed with scalability and modularity in mind.

---

### Features
- **Frontend**:
  - Developed using React.
  - Contains a registration form with input fields for name, email, and password.
  - Includes routing to navigate between pages (e.g., `Signup` and `Login`).
  - Axios is used to send HTTP requests to the backend.

- **Backend**:
  - Built using Node.js and Express.js.
  - Utilizes Mongoose for database modeling and interaction with MongoDB.
  - Handles user registration via a `/register` endpoint.
  - Includes basic error handling and validation.

- **Database**:
  - MongoDB for storing user information.
  - Employee model defined with fields like `name`, `email`, and `position`.

---

### Technologies Used
- **Frontend**:
  - React
  - React Router DOM
  - Axios
  - Bootstrap (for styling)

- **Backend**:
  - Node.js
  - Express.js
  - Mongoose
  - MongoDB

- **Others**:
  - Nodemon (for automatic server restarts during development)
  - CORS (for handling cross-origin requests)

---

### Setup Instructions

#### Prerequisites
1. Node.js installed on your system.
2. MongoDB running locally or in the cloud.
3. A modern web browser.

#### Installation
1. Clone the repository:
   ```bash
   git clone [<repository-url>](https://github.com/Saipradyumnagoud/Authentication-form.git)
   ```
2. Navigate to the project directory:
   ```bash
   cd Authentication-form
   ```

3. Install dependencies for the backend:
   ```bash
   npm install
   ```

4. Install dependencies for the frontend (if stored separately):
   ```bash
   cd client
   npm install
   ```

---

### Running the Application

#### Backend
1. Start the backend server:
   ```bash
   npm start
   ```
   - The server will run on `http://localhost:3000`.

#### Frontend
2. Start the React frontend:
   ```bash
   cd client
   npm start
   ```
   - The application will run on `http://localhost:3001` (or another port if configured).

---

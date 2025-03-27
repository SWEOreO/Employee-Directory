# Employee Directory v2

## Practice - Express & SQL: CRUD

## Overview
The **Employee Directory v2** project enhances the previous employee-management API by incorporating middleware, structuring endpoints into routers, and introducing a basic front-end. The project is also deployed using **Render** for a full-stack experience.

## Features & Requirements

- **Server Deployment**: Deploy the backend using **Render**.
- **API Enhancements**:
  - **POST /employees**:
    - Adds a new employee with a **unique ID**.
    - Returns `400` if the name is not correctly provided.
  - **Middleware**:
    - **404 Middleware**: Handles requests to undefined routes.
    - **Error-Handling Middleware**: Ensures proper error response handling.
- **Front-End Implementation**:
  - Uses `useEffect` and `fetch` to display a list of employees.
  - Includes a **form** to add new employees.

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/employee-directory-v2.git
cd employee-directory-v2
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables  
Create a `.env` file and add necessary configurations (e.g., database URL).

### 4. Run the Server Locally
```sh
npm start
```
Server should be running at **http://localhost:3000**.

### 5. Deploy to Render  
Follow the **Full Stack Deployment Guide** on Canvas to deploy your app.

## API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| **POST** | `/employees` | Add a new employee with a unique ID |
| **GET** | `/employees` | Retrieve a list of employees |
| **404 Middleware** | Handles undefined routes |
| **Error Middleware** | Manages application errors |

## Front-End Features

- **Employee List**: Displays all employees using `fetch`.
- **Add Employee Form**: Allows users to submit new employees.

## Testing

Use **Postman** or a similar API client to test the API routes.

---

This project is a step forward in building a scalable employee directory system with enhanced backend capabilities and a user-friendly front-end interface.

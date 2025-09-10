# API Test Project

This project is for API automation testing.

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed

---

## 🚀 Quick Setup

1. **Clone the repository**
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the server**
   ```sh
   npm start
   ```

---

## ❓ FAQ

**Error:**  
`Error: listen EADDRINUSE: address already in use :::6000`

**Solution:**  
- To view which process is using the port:
  ```sh
  lsof -i :6000
  ```
- To kill the process:
  ```sh
  kill -9 <PID>
  ```
  Replace `<PID>` with the process ID from the previous command.

---

## 📚 API Endpoints

### Add User

**POST** `/users`  
Request body:
```json
{
  "first_name": "Julius",
  "last_name": "Ortiz",
  "email": "julius.john.roel.ortiz@ing.com",
  "password": "password"
}
```

---

### Get All Users

**GET** `/users`

---

### Get User by ID

**GET** `/users/{id}`

---

### Delete User

**DELETE** `/users/{id}`

---

### Update User

**PATCH** `/users/{id}`  
Request body:
```json
{
  "first_name": "Julius",
  "last_name": "Ortiz",
  "email": "julius.john.roel.ortiz@ing.com",
  "password": "password"
}
```

---

### Login

**POST** `/users/login`  
Request body:
```json
{
  "email": "julius.john.roel.ortiz@ing.com",
  "password": "password"
}
```
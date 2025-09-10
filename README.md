# api-test-project
This is for API automation testing

Pre-requisites:
- Node installed

Setup instructions:
- Clone or download the project
- Install node_modules "npm install"
- Install nodemon "npm install -g nodemon"
- Install bcrypt "npm install bcrypt"
- Run the project "npm start"


FAQ:
Error: listen EADDRINUSE: address already in use :::6000

Solution:

To view system that uses ports use
lsof -i :6000

To kill port usage
kill -9 <PID>

Endpoints:

Add user: POST http://localhost:3000/users 
```json
{
    "first_name": "Julius",
    "last_name": "Ortiz",
    "email": "julius.john.roel.ortiz@ing.com",
    "password": "password"
}
```
Get users(list): GET http://localhost:3000/users 
Get user: http://localhost:3000/users/(id) 
Delete user: http://localhost:3000/users/(id) 
Update user: http://localhost:3000/users/(id) 
```json
{
    "first_name": "Julius",
    "last_name": "Ortiz",
    "email": "julius.john.roel.ortiz@ing.com",
    "password": "password"
}
```
Login: http://localhost:3000/users/login 
```json
{
    "email": "julius.john.roel.ortiz@ing.com",
    "password": "password"
}
```
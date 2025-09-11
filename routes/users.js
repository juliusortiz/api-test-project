import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
//import bcrypt from 'bcrypt';
import xlsx from 'xlsx';
import fs from 'fs';

// Helper to write users array to Excel
function saveUsersToExcel(users) {
    const ws = xlsx.utils.json_to_sheet(users);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Users');
    xlsx.writeFile(wb, 'users.xlsx');
}

// Helper to load users from Excel (if file exists)
function loadUsersFromExcel() {
    if (fs.existsSync('users.xlsx')) {
        const wb = xlsx.readFile('users.xlsx');
        const ws = wb.Sheets['Users'];
        return xlsx.utils.sheet_to_json(ws);
    }
    return [];
}

let users = loadUsersFromExcel();

// Create user with hashed password
router.post('/', async (req, res) => {
    const user = req.body;

    if (!user.password) {
        return res.status(400).send('Password is required');
    }

    //const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { ...user, password: hashedPassword, id: uuidv4() };
    users.push(newUser);

    saveUsersToExcel(users);

    res.send(`${user.first_name} has been added to the Database`);
});

// Get all users
router.get('/', (req, res) => {
    res.send(users);
});

// Get user by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

// Delete user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    saveUsersToExcel(users);

    res.send(`${id} deleted successfully from database`);
});

// Update user
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email } = req.body;
    const user = users.find((user) => user.id === id);
    if (first_name) user.first_name = first_name;
    if (last_name) user.last_name = last_name;
    if (email) user.email = email;

    saveUsersToExcel(users);

    res.send(`User with the ${id} has been updated`);
});

// Login route with password check
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the encrypted password directly
    if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
        message: 'Login successful',
        user: {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name
        }
    });
});

export default router;
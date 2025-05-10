const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { admin } = require('../firebase');

const JWT_SECRET = 'your_jwt_secret'; // Replace with .env in production

router.post('/signup', async (req, res) => {
const { email, password } = req.body;
try {
const userRecord = await admin.auth().createUser({ email, password });
res.status(201).json({ message: 'User created', uid: userRecord.uid });
} catch (err) {
res.status(400).json({ error: err.message });
}
});

router.post('/login', async (req, res) => {
const { email } = req.body;
try {
const user = await admin.auth().getUserByEmail(email);
const token = jwt.sign({ uid: user.uid }, JWT_SECRET, { expiresIn: '1h' });
res.status(200).json({ message: 'Login success', token });
} catch (err) {
res.status(400).json({ error: err.message });
}
});

module.exports = router;
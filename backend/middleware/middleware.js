// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    req.user = decoded;  // Add decoded data to request (e.g., user ID)
    next();
  });
}

module.exports = verifyToken;

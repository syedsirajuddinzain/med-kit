const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { getDiseaseData } = require('../controllers/diseaseController');

router.post('/predict', verifyToken, getDiseaseData);

module.exports = router;
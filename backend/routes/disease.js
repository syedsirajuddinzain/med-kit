import express from 'express';
import { matchSymptoms } from '../utils/matchSymptoms.js';

const router = express.Router();

router.post('/match', (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms || typeof symptoms !== 'string') {
    return res.status(400).json({ error: 'Invalid symptoms input' });
  }

  const result = matchSymptoms(symptoms);
  res.json({ diseases: result });
});

export default router;
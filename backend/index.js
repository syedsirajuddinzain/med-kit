const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const diseaseRoutes = require('./routes/disease');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/disease', diseaseRoutes);
app.get('/', (req, res) => {
    res.send('MediKit API is running ✅');
    });

app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});

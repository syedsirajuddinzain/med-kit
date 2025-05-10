const { db } = require('../firebase');
const matchSymptoms = require('../utils/matchSymptoms');

const getDiseaseData = async (req, res) => {
    const { symptoms } = req.body;

    const diseaseName = await matchSymptoms(symptoms);

    if (!diseaseName) {
        return res.status(404).json({ message: 'Disease not found' });
    }

    try {
        const doc = await db.collection('diseases').doc(diseaseName.toLowerCase()).get();
        if (!doc.exists) {
            return res.status(404).json({ message: 'Data not found' });
        }

        res.status(200).json(doc.data());
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getDiseaseData };
const diseaseMap = {
    cold: ['sneezing', 'runny nose', 'sore throat'],
    flu: ['fever', 'chills', 'body aches'],
    malaria: ['fever', 'chills', 'sweating'],
    };
    
    function matchSymptoms(symptoms) {
    symptoms = symptoms.map(s => s.toLowerCase());
    
    for (const disease in diseaseMap) {
    const matches = diseaseMap[disease].filter(symptom => symptoms.includes(symptom));
    if (matches.length >= 2) return disease;
    }
    return null;
    }
    
    module.exports = matchSymptoms;
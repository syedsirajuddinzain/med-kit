// Basic symptom-to-disease matching logic
const diseaseDatabase = [
    {
      name: "Common Cold",
      keywords: ["cough", "sore throat", "runny nose"]
    },
    {
      name: "Flu",
      keywords: ["fever", "headache", "body pain", "fatigue"]
    },
    {
      name: "Allergy",
      keywords: ["sneezing", "itchy eyes", "rash"]
    }
  ];
  
  export function matchSymptoms(input) {
    const inputWords = input.toLowerCase().split(/\s+/);
    const matchedDiseases = [];
  
    for (let disease of diseaseDatabase) {
      const matches = disease.keywords.filter(word => inputWords.includes(word));
      if (matches.length >= 2) {
        matchedDiseases.push(disease);
      }
    }
  
    return matchedDiseases.length > 0 ? matchedDiseases : [{ name: "Unknown" }];
  }
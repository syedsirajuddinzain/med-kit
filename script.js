const diseaseData = {
  cold: {
    doctor: "General Physician",
    home_remedy: "Steam inhalation, warm fluids",
    precaution: "Avoid cold drinks"
  },
  flu: {
    doctor: "General Physician",
    home_remedy: "Rest and hydration",
    precaution: "Stay isolated and wash hands"
  },
  diabetes: {
    doctor: "Endocrinologist",
    home_remedy: "Bitter gourd juice",
    precaution: "Avoid sugar and carbs"
  }
};

function searchDisease() {
  const input = document.getElementById("diseaseInput").value.trim().toLowerCase();
  const result = diseaseData[input];

  if (result) {
    document.getElementById("doctor").innerText = result.doctor;
    document.getElementById("remedy").innerText = result.home_remedy;
    document.getElementById("precaution").innerText = result.precaution;
  } else {
    alert("Disease not found. Try a different one.");
    document.getElementById("doctor").innerText = "";
    document.getElementById("remedy").innerText = "";
    document.getElementById("precaution").innerText = "";
  }
}

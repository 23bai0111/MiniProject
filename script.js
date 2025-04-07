const colors = [
  "radial-gradient(circle, hsl(260, 100%, 10%), hsl(280, 100%, 20%))",
  "radial-gradient(circle, hsl(300, 100%, 15%), hsl(320, 100%, 25%))",
  "radial-gradient(circle, hsl(240, 100%, 12%), hsl(260, 100%, 22%))"
];
let index = 0;
setInterval(() => {
  document.body.style.background = colors[index];
  index = (index + 1) % colors.length;
}, 10000);

function updateValue(id) {
  document.getElementById(id + "Value").textContent = document.getElementById(id).value;
}

function calculateBMI() {
  let height = document.getElementById("height").value / 100;
  let weight = document.getElementById("weight").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let activity = document.getElementById("activity").value;
  let goal = document.getElementById("goal").value;

  let bmi = (weight / (height * height)).toFixed(1);
  document.getElementById("bmi-result").textContent = `Your BMI: ${bmi}`;

  let bmr;
  if (gender === "male") {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height * 100) - (5.7 * age);
  } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height * 100) - (4.3 * age);
  }

  let tdee = (bmr * activity).toFixed(1);
  document.getElementById("tdee-result").textContent = `Your TDEE: ${tdee} kcal/day`;

  let protein = Math.round((tdee * 0.3) / 4);
  let carbs = Math.round((tdee * 0.5) / 4);
  let fats = Math.round((tdee * 0.2) / 9);

  document.getElementById("protein-grams").textContent = protein;
  document.getElementById("carbs-grams").textContent = carbs;
  document.getElementById("fats-grams").textContent = fats;

  let graphImage = document.getElementById("bmiGraphImage");
  if (graphImage) {
      graphImage.style.display = "block"; // Show the image
  }
  // Show the diet plan button
document.getElementById("dietPlanContainer").style.display = "block";

}




// Helper function to generate BMI region data
function generateBMIData(minBMI, maxBMI) {
  let data = [];
  for (let h = 140; h <= 210; h += 2) {
      let minWeight = (minBMI * (h / 100) ** 2).toFixed(1);
      let maxWeight = (maxBMI * (h / 100) ** 2).toFixed(1);
      data.push({ x: h, y: minWeight });
      data.push({ x: h, y: maxWeight });
  }
  return data;
}






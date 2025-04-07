function storeAndRedirect() {
  const messType = document.getElementById("mess-type").value;
  localStorage.setItem("selectedMessType", messType);
  window.location.href = "diet-result.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const resultDiv = document.getElementById("diet-plan-result");
  if (!resultDiv) return;

  const messType = localStorage.getItem("selectedMessType");
  if (!messType) {
    resultDiv.textContent = "No diet plan selected. Please go back and select your mess type.";
    return;
  }

  function getRandomItems(items, count) {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const messPlans = {
    veg: {
      title: "Vegetarian Diet Plan",
      meals: {
        Breakfast: {
          fixed: [{ item: "Idly (2 pcs)", calories: 120 }],
          random: [
            { item: "Chutney", calories: 90 },
            { item: "Plain Dosa", calories: 150 },
            { item: "Plain Masala Dosa", calories: 180 },
            { item: "Aloo Paratha", calories: 200 },
            { item: "Aloo Masala", calories: 160 },
            { item: "Poori (4 pcs)", calories: 280 }
          ]
        },
        Lunch: {
          fixed: [{ item: "White Rice", calories: 150 }],
          random: [
            { item: "Rasam", calories: 80 },
            { item: "Loose Curd (1 cup)", calories: 100 },
            { item: "Sambar", calories: 130 },
            { item: "Mushroom Peas Masala", calories: 200 },
            { item: "Paneer Tikka Masala", calories: 280 },
            { item: "Veg Biryani", calories: 350 },
            { item: "Phulka (2 pcs)", calories: 160 }
          ]
        },
        Dinner: {
          fixed: [{ item: "Phulka (2 pcs)", calories: 160 }],
          random: [
            { item: "Sambar", calories: 121 },
            { item: "Rasam", calories: 80 },
            { item: "Plain Dosa", calories: 150 },
            { item: "Dhal Fry", calories: 140 },
            { item: "Channa Masala", calories: 250 },
            { item: "Gobi Manchurian", calories: 300 },
            { item: "Veg Fried Rice", calories: 350 }
          ]
        }
      }
    },
    "non-veg": {
      title: "Non-Vegetarian Diet Plan",
      meals: {
        Breakfast: {
          fixed: [{ item: "Fried Eggs (2)", calories: 180 }],
          random: [
            { item: "Idly (2 pcs)", calories: 120 },
            { item: "Chutney", calories: 90 },
            { item: "Plain Masala Dosa", calories: 180 },
            { item: "Aloo Paratha", calories: 200 }
          ]
        },
        Lunch: {
          fixed: [{ item: "Kadai Chicken", calories: 250 }],
          random: [
            { item: "Chicken Biryani", calories: 900 },
            { item: "White Rice", calories: 150 },
            { item: "Onion Raitha", calories: 55 },
            { item: "Chicken 65 (5 pcs)", calories: 250 }
          ]
        },
        Dinner: {
          fixed: [{ item: "Dhal Rajma", calories: 150 }],
          random: [
            { item: "White Rice", calories: 130 },
            { item: "Loose Curd", calories: 100 },
            { item: "Soya Manchurian", calories: 350 },
            { item: "Channa Masala", calories: 250 }
          ]
        }
      }
    },
    special: {
      title: "Special Mess Diet Plan",
      meals: {
        Breakfast: {
          fixed: [{ item: "Fried Eggs (2)", calories: 180 }],
          random: [
            { item: "Idly (2 pcs)", calories: 120 },
            { item: "Sambar", calories: 125 },
            { item: "Chutney", calories: 90 },
            { item: "Pav Bhaji", calories: 375 },
            { item: "Omelette", calories: 190 }
          ]
        },
        Lunch: {
          fixed: [{ item: "Kadai Chicken", calories: 250 }],
          random: [
            { item: "Chicken Biryani", calories: 900 },
            { item: "Chicken 65 (5 pcs)", calories: 250 },
            { item: "Dal Tadka", calories: 280 },
            { item: "White Rice", calories: 150 },
            { item: "Phulka (2 pcs)", calories: 160 }
          ]
        },
        Dinner: {
          fixed: [{ item: "White Rice", calories: 130 }],
          random: [
            { item: "Sambar", calories: 121 },
            { item: "Dhal Rajma", calories: 150 },
            { item: "Egg Fried Rice", calories: 350 },
            { item: "Gobi Manchurian", calories: 300 },
            { item: "Channa Masala", calories: 250 }
          ]
        }
      }
    },
    paid: {
      title: "Paid Mess Diet Plan",
      meals: {
        Breakfast: {
          fixed: [{ item: "Fried Eggs (2)", calories: 180 }],
          random: [
            { item: "Idly (2 pcs)", calories: 120 },
            { item: "Sambar", calories: 125 },
            { item: "Chutney", calories: 90 },
            { item: "Pav Bhaji", calories: 375 },
            { item: "Omelette", calories: 190 }
          ]
        },
        Lunch: {
          fixed: [{ item: "Chicken Biryani", calories: 900 }],
          random: [
            { item: "Phulka", calories: 104 },
            { item: "Juice (Watermelon)", calories: 80 },
            { item: "Tandoori Roti", calories: 180 },
            { item: "Kadai Vegetable", calories: 280 },
            { item: "Paneer Tikka", calories: 320 },
            { item: "Chicken Tikka", calories: 350 },
            { item: "Kadai Paneer", calories: 380 },
            { item: "Fried Rice", calories: 350 },
            { item: "Noodles", calories: 400 },
            { item: "Butter Chicken", calories: 400 },
            { item: "White Rice", calories: 130 }
          ]
        },
        Dinner: {
          fixed: [{ item: "Chicken Biryani", calories: 900 }],
          random: [
            { item: "Phulka", calories: 104 },
            { item: "Juice (Watermelon)", calories: 80 },
            { item: "Tandoori Roti", calories: 180 },
            { item: "Paneer Tikka", calories: 320 },
            { item: "Fried Rice", calories: 350 },
            { item: "Butter Chicken", calories: 400 }
          ]
        }
      }
    }
  };

  const plan = messPlans[messType];
  if (!plan) {
    resultDiv.textContent = "Invalid mess type selected.";
    return;
  }

  let html = `<h2>${plan.title}</h2>`;
  let totalCalories = 0;

  for (const [mealName, mealData] of Object.entries(plan.meals)) {
    const randomItems = getRandomItems(mealData.random, 2);
    const allItems = [...mealData.fixed, ...randomItems];

    const mealCalories = allItems.reduce((sum, item) => sum + item.calories, 0);
    totalCalories += mealCalories;

    html += `<h3>${mealName}</h3><ul>`;
    allItems.forEach(({ item, calories }) => {
      html += `<li>${item} - ${calories} kcal</li>`;
    });
    html += `</ul><div class="meal-total">Total: ${mealCalories} kcal</div>`;
  }

  html += `<div class="meal-total" style="text-align:center; font-size:20px; margin-top:30px; border-top:1px solid #fff; padding-top:10px;">
             🔥 <strong>Total Daily Calories:</strong> ${totalCalories} kcal
           </div>`;

  resultDiv.innerHTML = html;
});

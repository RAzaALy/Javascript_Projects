const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEl = document.getElementById("meals");
const resultHeading = document.getElementById("resultHeading");
const singleMealEl = document.getElementById("singleMeal");
const learn = document.getElementById("learn");

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();
  // Clear single meal
  singleMealEl.innerHTML = "";
  // Clear  meals
  mealsEl.innerHTML = "";

  // Get search term
  const term = search.value;

  // Check for empty
  if (term.trim()) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.meals);
        resultHeading.innerHTML = `<h2>Search results for '${term}'</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<h2> no search results found :)<h2>`;
        } else {
          data.meals.map((meal) => {
            const content = meal.strInstructions;
            const data = content.slice(0, 200);
            // console.log(meal);
            const mealEl = document.createElement("div");
            mealEl.classList.add("meal");
            mealEl.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="content mealInfo" datamealid="${meal.idMeal}">
                  <h2>${meal.strCategory}</h2>
                  <small>${meal.strArea}</small>
                  <h3>${meal.strMeal}</h3>
                  <p>${data}...</p>
                  <a id="learn">Learn More </a>
                  <div class="button">
                    <a href="${meal.strYoutube}" target="_blank">
                      <button>Watch Now</button>
                    </a>
                  </div>
                </div>
            `;
            mealsEl.appendChild(mealEl);
          });
        }
      });
    // Clear search text
    search.value = "";
  } else {
    alert("Please enter a search term");
  }
}

// Fetch meal by ID
function getMealById(mealID) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
}

// Fetch random meal from API
function getRandomMeal() {
  // Clear meals and heading
  mealsEl.innerHTML = "";
  resultHeading.innerHTML = "";
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const meal = data.meals[0];
      addMealToDOM(meal);
    });
}

// Add meal to DOM
function addMealToDOM(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  mealsEl.innerHTML = "";
  singleMealEl.innerHTML = `
      <div class="meal" style="width: 100vw; height:auto; margin-bottom: 4rem ;">
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="height:50%">
      <div class="content mealInfo" datamealid="${meal.idMeal}">
        <h2>${meal.strCategory}</h2>
        <small>${meal.strArea}</small>
        <h3>${meal.strMeal}</h3>
        <p>${meal.strInstructions}</p>
      </div>
      <div class="button">
      <a href="${meal.strYoutube}" target="_blank">
        <button>Watch Now</button>
      </a>
    </div>
    <div class="main">
    <h2>Ingredients</h2>
    <ul>
      ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
    </ul>
   </div>
  </div>     
  `;
}

// Event listeners
submit.addEventListener("submit", searchMeal);
random.addEventListener("click", getRandomMeal);

mealsEl.addEventListener("click", (e) => {
  console.log(e.target);
  const mealInfo = e.path.find((item) => {
    if (item.classList) {
      return item.classList.contains("mealInfo");
    } else {
      return false;
    }
  });
  if (mealInfo) {
    const mealID = mealInfo.getAttribute("datamealid");
    // console.log(mealID);
    getMealById(mealID);
  }
});

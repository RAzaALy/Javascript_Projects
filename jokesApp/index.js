//Fetch Api to get data from API:
const joke = document.getElementById("joke");
const Btn = document.getElementById("Btn");

const url = "https://icanhazdadjoke.com/";
const config = {
  headers: {
    Accept: "application/json",
  },
};

//By using async await:

async function generateJoke() {
  const response = await fetch(url, config);
  const data = await response.json();
  // console.log(data);
  joke.innerHTML = data.joke;
}
generateJoke();
Btn.addEventListener("click", generateJoke);

//By using fetch api:

// function generateJoke() {
//   fetch(url, config)
//     .then((response) => response.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     });
// }
// generateJoke();
// Btn.addEventListener("click", generateJoke);

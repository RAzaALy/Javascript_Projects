const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  //By axios:
  //  axios(API_URL + username)
  //  .then(res => console.log(res))
  //  .catch(
  //      err=>alert('Something went wrong!!!')
  //  );

  //By async await:
  try {
    const { data } = await axios(API_URL + username);
    // console.log(data);
    createCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      alert(error + ". Username does not exist!");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    // console.log(data);
    addReposToCard(data);
  } catch (error) {
    if (error.response.status === 404) {
      alert(error + "/n Problem occuring while fetching repos!");
    }
  }
}

function addReposToCard(repos) {
  const reposDiv = document.getElementById("repos");
  repos.slice(0, 6).forEach((repo) => {
      const {html_url,name} = repo;
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = html_url;
    repoEl.target = "_blank";
    repoEl.innerText = name;
    reposDiv.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
function createCard(user) {
  const {
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    location,
  } = user;
  cardHtml = `
    <div class="card">
    <div class="img">
      <img
        src="${avatar_url}"
        alt="${name}"
        class="avatar"
        href="${avatar_url}"
      />
    <div>
    <i class="fas fa-map-marker-alt" aria-hidden="true"></i>    

    <strong>${location}</strong>
    </div>
    </div>
    <div class="userInfo">
      <h2>${name}</h2>
      <p>${bio}</p>
      <ul>
        <li>${followers} <strong>Followers</strong></li>
        <li>${following}  <strong>Following</strong></li>
        <li>${public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos">
      </div>
    </div>
  </div>
    `;
  main.innerHTML = cardHtml;
}

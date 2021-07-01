const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profileImg");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBg = document.querySelectorAll(".animatedBg");
const animatedBgTxt = document.querySelectorAll(".animatedBgTxt");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="./card.jpeg" alt="img" />';
  title.innerHTML = "Code Tech";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profileImg.innerHTML =
    '<img src="./author2.jpg" alt="user" />';
  name.innerHTML = "RAza ALy";
  date.innerHTML = "Apr 04, 2021";

  animatedBg.forEach((bg) => bg.classList.remove("animatedBg"));
  animatedBgTxt.forEach((bg) => bg.classList.remove("animatedBgTxt"));
}

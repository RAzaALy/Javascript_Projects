const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const toggle = document.querySelector(".toggle");
const mode = document.querySelector(".mode");
//TOGGLE FUNCTIONALITY FOR MODE:
toggle.addEventListener("change", (e) => {
  // console.log(e.target);
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    mode.innerHTML = `<strong>Dark Mode <i class="fas fa-moon"></i> </strong>`;
  } else {
    html.classList.add("dark");
    mode.innerHTML = `<strong>Light Mode <i class="fas fa-sun" style="color:#fac54e;"></i></strong>`;
  }
});

//wall-Clock setInterval for every second:
setInterval(() => {
  let date = new Date();
  let htime = date.getHours();
  let mtime = date.getMinutes();
  let stime = date.getSeconds();
  let hrotation = 30 * htime + mtime / 2 + ((stime / 2) * 1) / 60;
  let mrotation = 6 * mtime + stime / 10;
  let srotation = 6 * stime;
  hours.style.transform = `rotate(${hrotation}deg)`;
  minutes.style.transform = `rotate(${mrotation}deg)`;
  seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);
//Digital Clock
function updateClock() {
  let currentTime = new Date();
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;
  currentHours = currentHours == 0 ? 12 : currentHours;

  let timeOfDay = currentHours < 12 ? "AM" : "PM";
  let currentTimeStr =
    currentHours +
    ":" +
    currentMinutes +
    ":" +
    currentSeconds +
    ":" +
    timeOfDay;
  document.getElementById("clock").innerHTML = currentTimeStr;
}
function setDate() {
  let currentTime = new Date();
  const day = currentTime.getDay();
  const date = currentTime.getDate();
  const month = currentTime.getMonth();
  const dateEl = document.querySelector(".date");
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}
setDate();
//SetAlarm
const alarmBtn = document.getElementById("alarmBtn");
alarmBtn.addEventListener("click", (e) => {
  const alarm = document.getElementById("alarm");
  alarm.classList.toggle("show");
  setAlarm();
});
function setAlarm() {
  let alarm = document.getElementById("alarm");
  let alarmDate = new Date(alarm.value);
  // console.log(`Setting Alarm.... for ${alarmDate}`);
  let now = new Date();
  let timeToAlarm = alarmDate - now;
  console.log(timeToAlarm);
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      // console.log("Ringing Now");
      var audio = new Audio("bell.ogg");
      audio.play();
    },timeToAlarm);
  } else {
    console.log("Please input valid time");
  }
}


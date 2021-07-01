const clear = document.getElementById("clear");
const txt = document.getElementById("value");
const nums = document.querySelectorAll(".num");
const equal = document.getElementById("equal");

clear.addEventListener("click", (e) => {
  txt.value = "";
});
nums.forEach((value, index) => {
  value.addEventListener("click", () => {
    if (value.innerText !== "c" && value.innerText !== "=") {
      txt.value += value.innerText;
    }
  });
});

equal.addEventListener("click", () => {
  const answer = eval(txt.value);
  txt.value = answer;
});

const likeMe = document.querySelector(".likeMe");
const times = document.querySelector("#time");

let clickTime = 0;
let timeCount = 0;

likeMe.addEventListener("dblclick", (e) => {
  // console.log('click');
  // if (clickTime === 0) {
  //   clickTime = new Date().getTime();
  //   // console.log(clickTime);
  // } else {
  //   if (new Date().getTime() - clickTime < 800) {
  //     //   console.log("time less than 800ms");
  //     createHeart(e);
  //     clickTime = 0;
  //   } else {
  //     clickTime = new Date().getTime();
  //   }
  // }

  createHeart(e)
  
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  const x = e.clientX;
  const y = e.clientY;
  // console.log(x,y);
  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;
  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;
  //   console.log(xInside, yInside);
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  likeMe.appendChild(heart);

  times.innerHTML = ++timeCount;
  
  setTimeout(() => {
    heart.remove();
  }, 1000);
};

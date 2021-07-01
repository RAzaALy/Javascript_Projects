const sliderContainer = document.querySelector(".sliderContainer");
const rightSlide = document.querySelector(".rightSlide");
const leftSlide = document.querySelector(".leftSlide");
const upBtn = document.querySelector(".upBtn");
const downBtn = document.querySelector(".downBtn");
const slideLength = rightSlide.querySelectorAll("div").length;
// console.log(slideLength);
let activeSlideIndex = 0;

leftSlide.style.top = `-${(slideLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const slideHeight = sliderContainer.clientHeight;
  // console.log(slideHeight);
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${ activeSlideIndex * slideHeight}px)`;
  leftSlide.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;
};

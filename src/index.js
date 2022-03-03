import "./styles.css";

const nextSlideButton = document.querySelector("#next-slide");
const backToStart = document.querySelector("#back-to-start");

nextSlideButton.addEventListener("click", () => {
  const activeSlide = document.querySelector(".active");
  const nextSlide = activeSlide.nextElementSibling;

  if (nextSlide) {
    activeSlide.classList.remove("active");
    nextSlide.classList.add("active");
  }
});

backToStart.addEventListener("click", () => {
  const firstSlide = document.querySelector(".slide");
  document.querySelector(".active").classList.remove("active");
  firstSlide.classList.add("active");
});

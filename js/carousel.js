let index = 0;
const slides = Array.from(document.getElementsByClassName("mySlides"));

slides[index].style.display = "block";

setInterval(() => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}, 8000);

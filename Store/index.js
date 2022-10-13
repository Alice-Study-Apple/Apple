// main1 slider
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider-inner");
let pressed = false;
let on = false;
let startx;
let x;

slider.addEventListener("mouseover", (e) => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = "pointer";
});

slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "pointer";
});

slider.addEventListener("mouseout", () => {
  slider.style.cursor = "pointer";
});

window.addEventListener("mouseout", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX;

  innerSlider.style.left = `${x - startx}px`;
  checkboundary();
});

function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}
// main2 swiper
let swiper = document.querySelector(".swiper");
let innerSwiper = document.querySelector(".swiper-inner");
let pressed_s = false;
let on_s = false;
let startx_s;
let x_s;

swiper.addEventListener("mouseover", (e) => {
  pressed_s = true;
  startx_s = e.offsetX - innerSwiper.offsetLeft;
  swiper.style.cursor = "pointer";
});

swiper.addEventListener("mouseenter", () => {
  swiper.style.cursor = "pointer";
});

swiper.addEventListener("mouseout", () => {
  swiper.style.cursor = "pointer";
});

window.addEventListener("mouseout", () => {
  pressed_s = false;
});

swiper.addEventListener("mousemove", (e) => {
  if (!pressed_s) return;
  e.preventDefault();
  x_s = e.offsetX;

  innerSwiper.style.left = `${x_s - startx_s}px`;
  checkboundary_s();
});

function checkboundary_s() {
  let outer = swiper.getBoundingClientRect();
  let inner = innerSwiper.getBoundingClientRect();

  if (parseInt(innerSwiper.style.left) > 0) {
    innerSwiper.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSwiper.style.left = `-${inner.width - outer.width}px`;
  }
}

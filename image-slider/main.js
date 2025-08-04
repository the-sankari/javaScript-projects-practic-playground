"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();


// Image Slider Code
const container = document.querySelector("#container");
const images = [
  "./assets/img/players/akash.JPG",
  "./assets/img/players/nissan.JPG",
  "./assets/img/players/kajol.JPG",
  "./assets/img/players/shuvo.JPG",
  "./assets/img/players/sultan.JPG",
  "./assets/img/players/khabir.JPG",
  "./assets/img/players/taqbir.JPG",
  "./assets/img/players/anwar.JPG",
  "./assets/img/players/rayhan.JPG",
];

let currentSlide = 0;

const createSlider = () => {
  const sliderWrapper = document.createElement("div");
  sliderWrapper.className = "slider-wrapper";
  const slidesContainer = document.createElement("div");
  slidesContainer.className = "slides-container";
  sliderWrapper.appendChild(slidesContainer);
  container.appendChild(sliderWrapper);
};

const createSlides = () => {
  const slidesContainer = document.querySelector(".slides-container");

  const totalSlides = images.length;
  const containerWidth = totalSlides * 100; // 100% for each slide
  const slideWidth = 100 / totalSlides; // Each slide takes equal width

  slidesContainer.style.width = `${containerWidth}%`;

  images.forEach((image) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.width = `${slideWidth}%`;
    slide.style.background = `url(${image}) no-repeat center center`;
    slide.style.backgroundSize = "cover";

    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = "Image Slide";
    slide.appendChild(imgElement);
    slidesContainer.appendChild(slide);
  });
};

const showSlide = (slideIndex) => {
  const slidesContainer = document.querySelector(".slides-container");
  const slideWidth = 100 / images.length; // Each slide is 20% of container
  const offset = -slideIndex * slideWidth; // Calculate offset based on index
  slidesContainer.style.transform = `translateX(${offset}%)`;
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % images.length;
  showSlide(currentSlide);
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  showSlide(currentSlide);
};

const createButtons = () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "❮";
  prevBtn.className = "nav-btn prev-btn";
  prevBtn.addEventListener("click", prevSlide);

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "❯";
  nextBtn.className = "nav-btn next-btn";
  nextBtn.addEventListener("click", nextSlide);

  sliderWrapper.appendChild(prevBtn);
  sliderWrapper.appendChild(nextBtn);
};

createSlider();
createSlides();
createButtons();

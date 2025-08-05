"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

// Image Slider Code
const container = document.querySelector("#container");

// Array of image paths
// Ensure these paths are correct relative to your HTML file
// Adjust the paths if necessary based on your project structure
// For example, if your images are in a folder named 'assets/img/players', the paths should be relative to that
// If the images are in the same directory as this script,
// you can use relative paths like './assets/img/players/image.jpg'
// If the images are in a different directory, adjust the paths accordingly
// Here, we assume the images are in 'assets/img/players' relative to the HTML file
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

let autoPlayTimer = null;
let isAutoPlaying = false;
let intervalTime = 3000; // 3 seconds

const startAutoSlide = () => {
  if (!isAutoPlaying) {
    autoPlayTimer = setInterval(nextSlide, intervalTime);
  }
  isAutoPlaying = true; // Set auto-playing state
};
const stopAutoSlide = () => {
  clearInterval(autoPlayTimer);
  isAutoPlaying = false;
};
const toggleAutoSlide = () => {
  if (isAutoPlaying) {
    stopAutoSlide();
  } else {
    startAutoSlide();
  }
};

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
    const cssRelativePath = image.replace("./", "../");

    slide.style.setProperty("--bg-image", `url(${cssRelativePath})`); // Set background image using CSS variable

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
  updateActiveDot(); // Update active dot after changing slide
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  showSlide(currentSlide);
  updateActiveDot(); // Update active dot after changing slide
};

const createButtons = () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "❮";
  prevBtn.className = "nav-btn prev-btn";
  prevBtn.addEventListener("click", () => {
    handleManualNavigation("prev");
  });

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "❯";
  nextBtn.className = "nav-btn next-btn";
  nextBtn.addEventListener("click", () => {
    handleManualNavigation("next");
  });

  sliderWrapper.appendChild(prevBtn);
  sliderWrapper.appendChild(nextBtn);
};

const createDots = () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const dotsContainer = document.createElement("div");
  dotsContainer.className = "dots-container";

  images.forEach((_, index) => {
    const dots = document.createElement("div");
    dots.className = "dot";
    dots.addEventListener("click", () => {
      stopAutoSlide(); // Stop auto-slide when user clicks a dot
      currentSlide = index; // Set current slide to the clicked dot's index
      showSlide(currentSlide); // Show the corresponding slide
      updateActiveDot(); // Update active dot after changing slide
      setTimeout(() => {
        if (!document.querySelector(".slider-wrapper:hover")) {
          startAutoSlide(); // Resume auto-slide after a delay if not hovered
        }
      }, intervalTime);
    });
    dotsContainer.appendChild(dots);
  });
  sliderWrapper.appendChild(dotsContainer);
};

const updateActiveDot = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
};

const handleManualNavigation = (direction) => {
  stopAutoSlide(); // Stop auto-slide when user manually navigates
  direction === "next" ? nextSlide() : prevSlide();
  
  setTimeout(() => {
    if (!document.querySelector(".slider-wrapper:hover")) {
      startAutoSlide(); // Resume auto-slide after a delay if not hovered
    }
  }, intervalTime);
};

const addAutoPlayControls = () => {
  const slidesContainer = document.querySelector(".slides-container");
  slidesContainer.addEventListener("mouseenter", stopAutoSlide);
  slidesContainer.addEventListener("mouseleave", startAutoSlide);
};

const keyboardControls = () => {
  document.addEventListener("keydown", (event) => {
    if (document.activeElement.tagName === "INPUT") return; // Ignore if input is focused
    event.preventDefault(); // Prevent default behavior for arrow keys
    switch (event.key) {
      case "ArrowLeft":
        prevSlide();
        break;
      case "ArrowRight":
        nextSlide();
        break;
      case "1":
        currentSlide = 0;
        showSlide(currentSlide);
        updateActiveDot();
        break;
      case "2":
        currentSlide = 1;
        showSlide(currentSlide);
        updateActiveDot();
        break;
      case " ":
        toggleAutoSlide(); // Toggle auto-slide on spacebar press
        break;
      case "Enter":
        toggleAutoSlide(); // Toggle auto-slide on Enter key press
        break;
      default:
        const keyNumber = parseInt(event.key);
        if (keyNumber >= 1 && keyNumber <= images.length) {
          currentSlide = keyNumber - 1; // Convert 1-based index to 0-based
          showSlide(currentSlide);
          updateActiveDot();
        }
        break;

    }
  });
};

createSlider();
createSlides();
createButtons();
createDots();
updateActiveDot(); // Initialize first dot as active
keyboardControls();
addAutoPlayControls();
startAutoSlide();

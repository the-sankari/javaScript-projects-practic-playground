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
    imgElement.dataset.src = image; // Use data-src for lazy loading
    imgElement.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100%25' height='100%25' fill='%23ddd'/%3E%3C/svg%3E"; // Placeholder
    imgElement.alt = "Image Slide";
    imgElement.classList.add("lazy-image"); // Add class for lazy loading
    slide.appendChild(imgElement);
    slidesContainer.appendChild(slide);
  });
  // Lazy load images
  initializeLazyLoading();
};
const initializeLazyLoading = () => {
  const lazyImages = document.querySelectorAll(".lazy-image");

  if ("IntersectionObserver" in window) {
    // Load first image immediately
    if (lazyImages[0]) {
      loadImage(lazyImages[0]);
    }

    const lazyImageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            loadImage(img);
            observer.unobserve(img);
          }
        });
      },
      {
        // Reduce rootMargin for faster loading
        rootMargin: "50px",
      }
    );

    // Skip first image in observer (already loaded)
    lazyImages.forEach((img, index) => {
      if (index > 0) {
        // Skip first image
        lazyImageObserver.observe(img);
      }
    });
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    lazyImages.forEach((img) => {
      loadImage(img);
    });
  }
};

// Helper function to load individual image
const loadImage = (img) => {
  if (img.dataset.src && !img.classList.contains("loaded")) {
    const actualSrc = img.dataset.src;

    const tempImg = new Image();
    tempImg.onload = () => {
      img.src = actualSrc;
      img.classList.remove("lazy-image");
      img.classList.add("loaded");
    };
    tempImg.src = actualSrc;
  }
};
// Optional: Preload adjacent slides when navigating
const preloadAdjacentSlides = (currentIndex) => {
  const adjacentIndices = [currentIndex - 1, currentIndex + 1];

  adjacentIndices.forEach((index) => {
    if (index >= 0 && index < images.length) {
      const slide = document.querySelectorAll(".slide")[index];
      const img = slide?.querySelector(".lazy-image");

      if (img && img.dataset.src) {
        // Force load adjacent images
        const tempImg = new Image();
        tempImg.onload = () => {
          img.src = img.dataset.src;
          img.classList.remove("lazy-image");
          img.classList.add("loaded");
        };
        tempImg.src = img.dataset.src;
      }
    }
  });
};

// Update navigation functions to preload
const nextSlide = () => {
  currentSlide = (currentSlide + 1) % images.length;
  showSlide(currentSlide);
  updateActiveDot();
  preloadAdjacentSlides(currentSlide); // Preload next slides
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  showSlide(currentSlide);
  updateActiveDot();
  preloadAdjacentSlides(currentSlide); // Preload next slides
};
const showSlide = (slideIndex) => {
  const slidesContainer = document.querySelector(".slides-container");
  const slideWidth = 100 / images.length; // Each slide is 20% of container
  const offset = -slideIndex * slideWidth; // Calculate offset based on index
  slidesContainer.style.transform = `translateX(${offset}%)`;
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

const addTouchControls = () => {
  const slidesContainer = document.querySelector(".slides-container");

  let startX = 0;
  let startTime = 0;
  let isSwipe = false;

  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startTime = Date.now();
    isSwipe = false;
    stopAutoSlide();
    console.log("Touch started at:", startX); // Debug log
  });

  slidesContainer.addEventListener("touchmove", (e) => {
    const currentX = e.touches[0].clientX;
    const moveDistance = Math.abs(startX - currentX);

    // Only prevent scrolling if it's a horizontal swipe
    if (moveDistance > 10) {
      e.preventDefault();
      isSwipe = true;
    }
  });

  slidesContainer.addEventListener("touchend", (e) => {
    if (!isSwipe) return; // Exit if no swipe detected

    const endX = e.changedTouches[0].clientX;
    const endTime = Date.now();

    const distanceX = startX - endX;
    const timeDiff = endTime - startTime;

    console.log("Swipe distance:", distanceX, "Time:", timeDiff); // Debug log

    // Swipe detection thresholds
    const minSwipeDistance = 30; // Reduced threshold
    const maxSwipeTime = 500; // Increased time

    if (Math.abs(distanceX) > minSwipeDistance && timeDiff < maxSwipeTime) {
      if (distanceX > 0) {
        console.log("Next slide"); // Debug log
        nextSlide();
      } else {
        console.log("Previous slide"); // Debug log
        prevSlide();
      }
    }

    // Resume auto-play
    setTimeout(() => {
      if (!document.querySelector(".slider-wrapper:hover")) {
        startAutoSlide();
      }
    }, 2000);
  });
};

createSlider();
createSlides();
createButtons();
createDots();
updateActiveDot(); // Initialize first dot as active
keyboardControls();
addTouchControls();
addAutoPlayControls();
startAutoSlide();

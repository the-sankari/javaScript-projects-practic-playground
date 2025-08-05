# Configuration Guide

Complete configuration options for customizing the Advanced Image Slider.

## Image Configuration

### 1. Image Array Setup

```javascript
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
```

### 2. Path Configuration Guidelines

#### HTML File Relative Paths

- Use `./assets/img/` for images relative to your HTML file
- Ensure the path structure matches your project layout

#### CSS Background Paths

- The slider automatically converts `./` to `../` for CSS backgrounds
- This handles the difference between HTML and CSS file locations

#### Supported Image Formats

- **Recommended**: `.jpg`, `.jpeg`, `.png`, `.webp`
- **File Size**: Optimize images to 100-200KB for best performance
- **Dimensions**: Consistent aspect ratios work best

### 3. Dynamic Image Loading

```javascript
// Load images from API or dynamic source
fetch("/api/slider-images")
  .then((response) => response.json())
  .then((imageUrls) => {
    images.length = 0; // Clear existing
    images.push(...imageUrls); // Add new images
    // Reinitialize slider if needed
  });
```

---

## Auto-play Configuration

### 1. Timing Control

```javascript
let intervalTime = 3000; // 3 seconds (default)

// Examples:
let intervalTime = 2000; // 2 seconds - faster
let intervalTime = 5000; // 5 seconds - slower
let intervalTime = 1000; // 1 second - very fast
```

### 2. Auto-play Behavior

```javascript
// Start auto-play immediately on load
startAutoSlide();

// Start with delay
setTimeout(() => {
  startAutoSlide();
}, 1000); // Wait 1 second before starting

// Disable auto-play completely
// Comment out or remove: startAutoSlide();
```

### 3. Manual Control Options

```javascript
// Custom pause duration after manual navigation
setTimeout(() => {
  if (!document.querySelector(".slider-wrapper:hover")) {
    startAutoSlide();
  }
}, intervalTime); // Use same interval as auto-play

// Custom pause duration
}, 2000); // Always pause for 2 seconds after manual interaction
```

---

## Visual Styling Configuration

### 1. Dot Indicators Customization

#### Colors and Sizes

```css
.dot {
  width: 12px; /* Inactive dot size */
  height: 12px;
  border-radius: 50%;
  background-color: rgba(180, 26, 26, 0.5); /* Your brand color */
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background-color: rgba(180, 26, 26, 0.8); /* Hover state */
}

.dot.active {
  width: 20px; /* Active dot width */
  height: 12px; /* Active dot height */
  background-color: white; /* Active dot color */
}
```

#### Alternative Dot Styles

```css
/* Circular dots (equal width/height) */
.dot.active {
  width: 16px;
  height: 16px;
  border: 2px solid white;
}

/* Square dots */
.dot {
  border-radius: 2px; /* Instead of 50% */
}

/* Minimal dots */
.dot {
  width: 8px;
  height: 8px;
  opacity: 0.5;
}
.dot.active {
  width: 8px;
  height: 8px;
  opacity: 1;
}
```

### 2. Navigation Buttons

#### Button Positioning

```css
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px 20px; /* Larger buttons */
  cursor: pointer;
  z-index: 111;
  border-radius: 50%; /* Circular buttons */
}

.nav-btn.prev-btn {
  left: 20px; /* Distance from left edge */
}

.nav-btn.next-btn {
  right: 20px; /* Distance from right edge */
}
```

#### Button Icons and Text

```javascript
// Custom button content
const prevBtn = document.createElement("button");
prevBtn.innerHTML = "‹"; // Different arrow
// Or: prevBtn.textContent = "Prev";
// Or: prevBtn.innerHTML = "<i class='fas fa-chevron-left'></i>"; // Font Awesome

const nextBtn = document.createElement("button");
nextBtn.innerHTML = "›"; // Different arrow
// Or: nextBtn.textContent = "Next";
// Or: nextBtn.innerHTML = "<i class='fas fa-chevron-right'></i>"; // Font Awesome
```

### 3. Slider Container Styling

#### Container Dimensions

```css
.slider-wrapper {
  width: 100%;
  height: 400px; /* Fixed height */
  /* Or */
  height: 50vh; /* Viewport height */
  /* Or */
  aspect-ratio: 16/9; /* Maintain aspect ratio */
  overflow: hidden;
  position: relative;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Drop shadow */
}
```

#### Background Blur Effects

```css
.slide::before {
  filter: blur(3px); /* Adjust blur intensity */
  /* Options: blur(1px) - subtle, blur(5px) - heavy */
}

/* Disable blur completely */
.slide::before {
  filter: none;
}
```

---

## Touch and Swipe Configuration

### 1. Swipe Sensitivity

```javascript
// In addTouchControls() function
const minSwipeDistance = 30; // Minimum pixels for swipe (default: 30)
const maxSwipeTime = 500; // Maximum milliseconds for swipe (default: 500)

// More sensitive (easier to trigger)
const minSwipeDistance = 20;
const maxSwipeTime = 600;

// Less sensitive (harder to trigger)
const minSwipeDistance = 50;
const maxSwipeTime = 300;
```

### 2. Touch Behavior

```javascript
// Auto-play resume delay after touch
setTimeout(() => {
  if (!document.querySelector(".slider-wrapper:hover")) {
    startAutoSlide();
  }
}, 2000); // 2 seconds (default)

// Immediate resume
setTimeout(() => {
  startAutoSlide();
}, 0);

// Longer delay
setTimeout(() => {
  startAutoSlide();
}, 5000); // 5 seconds
```

### 3. Scroll Prevention

```javascript
// Prevent vertical scrolling during horizontal swipes
if (moveDistance > 10) {
  // Threshold for scroll prevention
  e.preventDefault();
  isSwipe = true;
}

// More aggressive prevention
if (moveDistance > 5) {
  // Lower threshold
  e.preventDefault();
}

// Less aggressive prevention
if (moveDistance > 20) {
  // Higher threshold
  e.preventDefault();
}
```

---

## Keyboard Navigation Configuration

### 1. Key Mappings

```javascript
// Current mappings in keyboardControls()
switch (event.key) {
  case "ArrowLeft": // Previous slide
  case "ArrowRight": // Next slide
  case " ": // Toggle auto-play (Space)
  case "Enter": // Toggle auto-play
  case "1":
  case "2":
  /* ... */ case "9": // Direct navigation
}
```

### 2. Custom Key Mappings

```javascript
// Add custom keys
switch (event.key) {
  case "a": // 'A' key for previous
    prevSlide();
    break;
  case "d": // 'D' key for next
    nextSlide();
    break;
  case "p": // 'P' key for pause
    toggleAutoSlide();
    break;
  case "Home": // Home key for first slide
    currentSlide = 0;
    showSlide(currentSlide);
    updateActiveDot();
    break;
  case "End": // End key for last slide
    currentSlide = images.length - 1;
    showSlide(currentSlide);
    updateActiveDot();
    break;
}
```

### 3. Input Field Detection

```javascript
// Current implementation
if (document.activeElement.tagName === "INPUT") return;

// More comprehensive detection
const activeElement = document.activeElement;
const inputTypes = ["INPUT", "TEXTAREA", "SELECT"];
if (inputTypes.includes(activeElement.tagName)) return;

// Include contenteditable
if (activeElement.isContentEditable) return;
```

---

## Lazy Loading Configuration

### 1. Intersection Observer Options

```javascript
// In initializeLazyLoading()
const lazyImageObserver = new IntersectionObserver(
  (entries, observer) => { /* ... */ },
  {
    rootMargin: "50px",    // Load images 50px before visible
    threshold: 0.1         // Trigger when 10% visible
  }
);

// More aggressive preloading
{
  rootMargin: "100px",   // Load 100px before
  threshold: 0
}

// Conservative loading
{
  rootMargin: "10px",    // Load 10px before
  threshold: 0.5         // Trigger when 50% visible
}
```

### 2. Preloading Strategy

```javascript
// Current: Preload adjacent slides
const adjacentIndices = [currentIndex - 1, currentIndex + 1];

// Preload more slides
const adjacentIndices = [
  currentIndex - 2,
  currentIndex - 1,
  currentIndex + 1,
  currentIndex + 2,
];

// Preload only next slide
const adjacentIndices = [currentIndex + 1];
```

### 3. Placeholder Configuration

```javascript
// Current SVG placeholder
imgElement.src =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100%25' height='100%25' fill='%23ddd'/%3E%3C/svg%3E";

// Colored placeholder
imgElement.src =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3C/svg%3E";

// No placeholder (transparent)
imgElement.src = "";

// Custom loading image
imgElement.src = "./assets/img/loading-placeholder.jpg";
```

---

## Advanced Configuration

### 1. Multiple Sliders on Same Page

```javascript
// Create slider class for multiple instances
class ImageSlider {
  constructor(containerId, imageArray, options = {}) {
    this.container = document.querySelector(containerId);
    this.images = imageArray;
    this.options = { intervalTime: 3000, ...options };
    this.currentSlide = 0;
    this.init();
  }

  init() {
    this.createSlider();
    this.createSlides();
    // ... other initialization
  }
}

// Usage
const slider1 = new ImageSlider("#slider1", images1);
const slider2 = new ImageSlider("#slider2", images2, { intervalTime: 5000 });
```

### 2. Custom Animation Effects

```css
/* Fade transition instead of slide */
.slides-container {
  transition: opacity 0.5s ease;
}

.slide {
  position: absolute;
  opacity: 0;
}

.slide.active {
  opacity: 1;
}

/* Zoom effect */
.slide {
  transform: scale(0.8);
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide.active {
  transform: scale(1);
}
```

### 3. Responsive Breakpoints

```css
/* Mobile adjustments */
@media (max-width: 768px) {
  .slider-wrapper {
    height: 250px;
  }

  .nav-btn {
    padding: 10px 15px;
    font-size: 14px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }

  .dot.active {
    width: 12px;
    height: 8px;
  }
}

/* Large screens */
@media (min-width: 1200px) {
  .slider-wrapper {
    height: 600px;
  }
}
```

---

## Performance Configuration

### 1. Image Optimization Settings

```javascript
// Recommended image specifications
const imageSpecs = {
  format: "WebP with JPEG fallback",
  quality: 85,
  maxWidth: 1920,
  maxHeight: 1080,
  fileSize: "< 200KB per image",
};
```

### 2. Memory Management

```javascript
// Clear unused images (for very large image sets)
const clearDistantImages = (currentIndex) => {
  const slides = document.querySelectorAll(".slide img");
  slides.forEach((img, index) => {
    const distance = Math.abs(index - currentIndex);
    if (distance > 2) {
      // Keep current + 2 adjacent
      img.src = img.dataset.placeholder || "";
      img.classList.add("lazy-image");
      img.classList.remove("loaded");
    }
  });
};
```

### 3. Debounced Events

```javascript
// Debounce rapid navigation to prevent performance issues
let navigationTimeout;
const debouncedNavigation = (direction) => {
  clearTimeout(navigationTimeout);
  navigationTimeout = setTimeout(() => {
    handleManualNavigation(direction);
  }, 100); // 100ms debounce
};
```

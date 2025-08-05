# API Reference

Complete API documentation for the Advanced Image Slider.

## Core Functions

### Initialization Functions

#### `createSlider()`

Creates the main slider wrapper and container elements.

**Usage:**

```javascript
createSlider();
```

**DOM Output:**

```html
<div class="slider-wrapper">
  <div class="slides-container"></div>
</div>
```

**Dependencies:** Requires `#container` element in DOM

---

#### `createSlides()`

Generates slide elements with lazy loading setup and dynamic width calculations.

**Parameters:** None (uses global `images` array)

**Implementation Details:**

- Creates slides with `data-src` for lazy loading
- Sets CSS custom properties for background images
- Initializes Intersection Observer for performance
- Calculates dynamic widths based on image count

**Usage:**

```javascript
createSlides();
```

**DOM Output:**

```html
<div class="slide" style="width: 11.11%;">
  <img class="lazy-image" data-src="./assets/img/image.jpg" alt="Image Slide" />
</div>
```

---

### Navigation Functions

#### `nextSlide()`

Advances to the next slide with wrap-around support.

**Parameters:** None

**Side Effects:**

- Updates `currentSlide` variable
- Calls `showSlide()` and `updateActiveDot()`
- Triggers `preloadAdjacentSlides()`

```javascript
nextSlide(); // Moves to next slide, wraps to first if at end
```

---

#### `prevSlide()`

Moves to the previous slide with wrap-around support.

**Parameters:** None

**Side Effects:**

- Updates `currentSlide` variable
- Calls `showSlide()` and `updateActiveDot()`
- Triggers `preloadAdjacentSlides()`

```javascript
prevSlide(); // Moves to previous slide, wraps to last if at beginning
```

---

#### `showSlide(slideIndex)`

Displays a specific slide by index using CSS transforms.

**Parameters:**

- `slideIndex` (number): Zero-based index of slide to show

**Implementation:**

```javascript
showSlide(2); // Shows the third slide (zero-based index)
```

**CSS Effect:**

```css
.slides-container {
  transform: translateX(-22.22%); /* For slide index 2 of 9 slides */
}
```

---

### Auto-play Functions

#### `startAutoSlide()`

Starts automatic slide progression.

**Parameters:** None

**Behavior:**

- Only starts if not already playing
- Uses `intervalTime` for delay between slides
- Sets `isAutoPlaying` to `true`

```javascript
startAutoSlide();
```

---

#### `stopAutoSlide()`

Stops automatic slide progression and clears timer.

**Parameters:** None

**Behavior:**

- Clears `autoPlayTimer` interval
- Sets `isAutoPlaying` to `false`

```javascript
stopAutoSlide();
```

---

#### `toggleAutoSlide()`

Toggles auto-play state between playing and stopped.

**Parameters:** None

```javascript
toggleAutoSlide(); // Starts if stopped, stops if playing
```

---

### User Interface Functions

#### `createButtons()`

Creates previous and next navigation buttons.

**Parameters:** None

**DOM Output:**

```html
<button class="nav-btn prev-btn">❮</button>
<button class="nav-btn next-btn">❯</button>
```

**Event Handlers:**

- Calls `handleManualNavigation()` on click

---

#### `createDots()`

Creates dot indicators for each slide.

**Parameters:** None (uses `images.length`)

**DOM Output:**

```html
<div class="dots-container">
  <div class="dot"></div>
  <div class="dot active"></div>
  <!-- One dot per image -->
</div>
```

**Event Handlers:**

- Direct slide navigation on click
- Auto-play pause and resume logic

---

#### `updateActiveDot()`

Updates visual state of dot indicators.

**Parameters:** None

**Behavior:**

- Removes `active` class from all dots
- Adds `active` class to dot matching `currentSlide`

```javascript
updateActiveDot(); // Updates dots to match current slide
```

---

### Event Handling Functions

#### `handleManualNavigation(direction)`

Handles manual navigation with auto-play management.

**Parameters:**

- `direction` (string): "next" or "prev"

**Behavior:**

- Stops auto-play immediately
- Navigates in specified direction
- Resumes auto-play after delay if not hovering

```javascript
handleManualNavigation("next"); // Navigate to next slide
handleManualNavigation("prev"); // Navigate to previous slide
```

---

#### `keyboardControls()`

Sets up keyboard event listeners for navigation.

**Supported Keys:**

- `ArrowLeft` / `ArrowRight` - Navigation
- `1-9` - Direct slide access
- `Space` / `Enter` - Toggle auto-play

**Smart Input Detection:**

- Ignores keyboard events when input fields are focused

```javascript
keyboardControls(); // Initialize keyboard navigation
```

---

#### `addTouchControls()`

Implements touch and swipe gesture support.

**Touch Events:**

- `touchstart` - Record start position and time
- `touchmove` - Track movement and prevent scrolling for horizontal swipes
- `touchend` - Calculate swipe direction and distance

**Configuration:**

```javascript
const minSwipeDistance = 30; // pixels
const maxSwipeTime = 500; // milliseconds
```

---

#### `addAutoPlayControls()`

Adds hover-based auto-play control.

**Behavior:**

- Pauses auto-play on `mouseenter`
- Resumes auto-play on `mouseleave`

**Target Element:** `.slides-container`

---

### Performance Functions

#### `initializeLazyLoading()`

Initializes lazy loading with Intersection Observer API.

**Features:**

- Immediate first image loading
- Observer for remaining images
- Fallback for unsupported browsers

**Configuration:**

```javascript
{
  rootMargin: "50px"; // Load images 50px before visible
}
```

---

#### `loadImage(img)`

Helper function to load individual images.

**Parameters:**

- `img` (HTMLImageElement): Image element to load

**Behavior:**

- Checks for `data-src` attribute
- Creates temporary image for preloading
- Updates `src` and classes on load complete

```javascript
loadImage(imageElement); // Load specific image
```

---

#### `preloadAdjacentSlides(currentIndex)`

Preloads images for adjacent slides for smooth navigation.

**Parameters:**

- `currentIndex` (number): Current slide index

**Behavior:**

- Loads previous slide (currentIndex - 1)
- Loads next slide (currentIndex + 1)
- Skips invalid indices

```javascript
preloadAdjacentSlides(2); // Preload slides 1 and 3
```

---

## Global Variables

### Configuration Variables

```javascript
const images = []; // Array of image paths
let currentSlide = 0; // Current active slide index (0-based)
let intervalTime = 3000; // Auto-play interval in milliseconds
```

### State Variables

```javascript
let autoPlayTimer = null; // Reference to setInterval timer
let isAutoPlaying = false; // Auto-play state boolean
```

### Touch Variables

```javascript
let startX = 0; // Touch start X coordinate
let startTime = 0; // Touch start timestamp
let isSwipe = false; // Swipe detection flag
```

---

## Event Callbacks

### Button Click Events

```javascript
// Navigation buttons
prevBtn.addEventListener("click", () => {
  handleManualNavigation("prev");
});

nextBtn.addEventListener("click", () => {
  handleManualNavigation("next");
});
```

### Dot Click Events

```javascript
// Dot indicators
dot.addEventListener("click", () => {
  stopAutoSlide();
  currentSlide = index;
  showSlide(currentSlide);
  updateActiveDot();
  // Resume auto-play after delay
});
```

### Keyboard Events

```javascript
document.addEventListener("keydown", (event) => {
  // Smart input detection and key handling
});
```

### Touch Events

```javascript
// Touch gesture detection
slidesContainer.addEventListener("touchstart", handleTouchStart);
slidesContainer.addEventListener("touchmove", handleTouchMove);
slidesContainer.addEventListener("touchend", handleTouchEnd);
```

### Hover Events

```javascript
// Auto-play control
slidesContainer.addEventListener("mouseenter", stopAutoSlide);
slidesContainer.addEventListener("mouseleave", startAutoSlide);
```

---

## Initialization Sequence

The proper initialization order for all slider components:

```javascript
createSlider(); // 1. Create DOM structure
createSlides(); // 2. Generate slides with lazy loading
createButtons(); // 3. Create navigation buttons
createDots(); // 4. Create dot indicators
updateActiveDot(); // 5. Set initial active state
keyboardControls(); // 6. Enable keyboard navigation
addTouchControls(); // 7. Enable touch/swipe support
addAutoPlayControls(); // 8. Add hover controls
startAutoSlide(); // 9. Start auto-play
```

---

## Error Handling

### Safe Element Selection

```javascript
const element = document.querySelector(".selector");
if (element) {
  // Proceed with element manipulation
}
```

### Boundary Checks

```javascript
if (index >= 0 && index < images.length) {
  // Safe to access images[index]
}
```

### Feature Detection

```javascript
if ("IntersectionObserver" in window) {
  // Use modern lazy loading
} else {
  // Fallback implementation
}
```

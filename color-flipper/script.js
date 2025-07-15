// Get DOM elements
const flipBtn = document.getElementById("flip-btn");
const colorCode = document.getElementById("color-code");
const body = document.body;

// Function to generate random hex color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to flip background color
function flipColor() {
  const newColor = getRandomColor();
  body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
}

// Add event listener to button
flipBtn.addEventListener("click", flipColor);

// Initialize with a random color when page loads
flipColor();

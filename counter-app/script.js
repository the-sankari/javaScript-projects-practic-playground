const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const countDisplay = document.getElementById("count");
let count = 0;

decreaseButton.addEventListener("click", () => {
  // Ensure count does not go below 0
  if (count > 0) {
    count--;
  }
  updateCountDisplay();
});

increaseButton.addEventListener("click", () => {
  count++;
  updateCountDisplay();
});

// Reset the count to 0 when the page is loaded
window.addEventListener("load", () => {
  count = 0;
  updateCountDisplay();
});

// Optional: Reset the count when the user double-clicks on the count display
countDisplay.addEventListener("dblclick", () => {
  count = 0;
  updateCountDisplay();
});

// Optional: Add keyboard support for increasing and decreasing the count
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "+" || e.key === "ArrowRight") {
    count++;
    updateCountDisplay();
  } else if (e.key === "ArrowDown" || e.key === "-" || e.key === "ArrowLeft") {
    count--;
    updateCountDisplay();
  }
});

// Optional: Add a reset button to reset the count to 0

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.id = "reset";
document.getElementById("btn-container").appendChild(resetButton);

resetButton.addEventListener("click", () => {
  count = 0;
  updateCountDisplay();
});

// Show the reset button when the count is not zero
function toggleResetButton() {
  resetButton.style.display = count !== 0 ? "block" : "none";
}

function updateCountDisplay() {
  countDisplay.textContent = count;
  toggleResetButton(); // Show or hide the reset button based on count
  countDisplay.classList.add("changed");
  setTimeout(() => countDisplay.classList.remove("changed"), 150);
}

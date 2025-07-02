import { getCount } from "./counter.js";

export function updateDisplay() {
  const countDisplay = document.getElementById("count");
  const count = getCount();
  countDisplay.textContent = count;
  animateCount(countDisplay);
  toggleResetButton();
}

function animateCount(el) {
  el.classList.add("changed");
  const timeout = 150;

  setTimeout(() => {
    el.classList.remove("changed");
  }, timeout);
}

function toggleResetButton(count) {
  const resetButton = document.getElementById("reset");

  if (resetButton) {
    resetButton.style.display = count !== 0 ? "block" : "none";
  }
}

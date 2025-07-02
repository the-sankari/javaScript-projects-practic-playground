const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const countDisplay = document.getElementById("count");
let count = 0;

// Reset Button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.id = "reset";
document.getElementById("btn-container").appendChild(resetButton);

// Auto Button
const autoButton = document.createElement("button");
autoButton.textContent = "Start Auto";
autoButton.id = "auto";
document.getElementById("btn-container").appendChild(autoButton);

// Game Button
const gameButton = document.createElement("button");
gameButton.textContent = "Start Game";
gameButton.id = "game";
document.getElementById("btn-container").appendChild(gameButton);

// Game Message Display
const gameMessage = document.getElementById("game-message");

// State
let autoInterval = null;
let gameActive = false;
let gameTimer = null;
const targetCount = 10;
const gameDuration = 15;
let timeLeft = gameDuration;

// Count Display Logic
function updateCountDisplay() {
  countDisplay.textContent = count;
  toggleResetButton();
  countDisplay.classList.add("changed");
  setTimeout(() => countDisplay.classList.remove("changed"), 150);
}

// Reset Button Show/Hide
function toggleResetButton() {
  resetButton.style.display = count !== 0 ? "block" : "none";
}

// Reset Button Logic
resetButton.addEventListener("click", () => {
  const confirmReset = confirm("Are you sure you want to reset the count?");
  if (!confirmReset) return;

  count = 0;
  updateCountDisplay();

  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
    autoButton.textContent = "Start Auto";
  }

  if (gameActive) {
    clearInterval(gameTimer);
    gameActive = false;
    gameButton.disabled = false;
    gameMessage.textContent = "Game reset.";
    setTimeout(() => (gameMessage.textContent = ""), 2000);
  }
});

// Increase / Decrease Buttons
increaseButton.addEventListener("click", () => {
  if (!gameActive || count < targetCount) {
    count++;
    updateCountDisplay();
  }
});

decreaseButton.addEventListener("click", () => {
  if (!gameActive || count > 0) {
    if (count > 0) count--;
    updateCountDisplay();
  }
});

// Keyboard Support
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "+" || e.key === "ArrowRight") {
    if (!gameActive || count < targetCount) {
      count++;
      updateCountDisplay();
    }
  } else if (e.key === "ArrowDown" || e.key === "-" || e.key === "ArrowLeft") {
    if (!gameActive || count > 0) {
      if (count > 0) count--;
      updateCountDisplay();
    }
  }
});

// Double-click reset
countDisplay.addEventListener("dblclick", () => {
  const confirmReset = confirm("Are you sure you want to reset the count?");
  if (confirmReset) {
    count = 0;
    updateCountDisplay();
  }
});

// Auto Counter Logic
autoButton.addEventListener("click", () => {
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
    autoButton.textContent = "Start Auto";
  } else {
    autoInterval = setInterval(() => {
      count++;
      updateCountDisplay();
    }, 1000);
    autoButton.textContent = "Stop Auto";
  }
});

// Game Mode Logic
gameButton.addEventListener("click", () => {
  if (gameActive) return;

  count = 0;
  updateCountDisplay();
  gameActive = true;
  timeLeft = gameDuration;
  setProgress(100); // Reset progress circle
  gameMessage.textContent = `🎯 Reach ${targetCount} in ${gameDuration} seconds!`;
  gameButton.disabled = true;

  enableButtons(true);

  gameTimer = setInterval(() => {
    timeLeft--;
    const progressPercent = (timeLeft / gameDuration) * 100;
    setProgress(progressPercent);
    gameMessage.textContent = `⏳ Time left: ${timeLeft}s – Goal: ${targetCount}`;
    if (count >= targetCount) {
      endGame(true);
    } else if (timeLeft <= 0) {
      endGame(false);
    }
  }, 1000);
});

function endGame(won) {
  clearInterval(gameTimer);
  gameActive = false;
  gameButton.disabled = false;
  enableButtons(false);

  gameMessage.textContent = won
    ? `🎉 You reached ${targetCount}! You win!`
    : `💥 Time's up! You reached ${count}. Try again!`;

  setTimeout(() => {
    gameMessage.textContent = "";
    timeLeft = gameDuration;
  }, 3000);
}

function enableButtons(state) {
  increaseButton.disabled = !state;
  decreaseButton.disabled = !state;
  resetButton.disabled = state;
}

// Initialize on load
window.addEventListener("load", () => {
  const saved = localStorage.getItem("counterValue");
  count = saved !== null ? parseInt(saved, 10) : 0;
  updateCountDisplay();
});

const progressCircle = document.querySelector(".progress-ring__circle");
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

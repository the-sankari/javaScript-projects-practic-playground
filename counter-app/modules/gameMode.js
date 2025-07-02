import {
  decreaseButton,
  getCount,
  increaseButton,
  setCount,
} from "./counter.js";
import { initProgress, setProgress } from "./progress.js";
import { updateDisplay } from "./ui.js";

let timer = null;
let timeLeft = 15;
let target = 10;
let active = false;

export function setupGameMode() {
  initProgress();

  const gameButton = document.getElementById("game");
  const gameMessage = document.getElementById("game-message");

  gameButton.addEventListener("click", () => {
    if (active) return;

    target = 10; // Set target count
    timeLeft = 15; // Set game duration
    setCount(0); // Reset count
    updateDisplay();
    setProgress(100);

    active = true;
    gameButton.disabled = true;

    gameMessage.textContent = `Game started! Reach ${target} in ${timeLeft} seconds.`;

    timer = setInterval(() => {
      timeLeft--;
      setProgress((timeLeft / 15) * 100);
      gameMessage.textContent = `Time left: ${timeLeft}s – Goal: ${target}`;

      if (getCount() >= target) {
        finish(true);
      } else if (timeLeft <= 0) {
        finish(false);
      }
    }, 1000);
  });
  function finish(won) {
    clearInterval(timer);
    setProgress(0);
    active = false;
    gameButton.disabled = false;

    if (won) {
      gameMessage.textContent = `🎉 You reached ${target}! You win!`;
    } else {
      gameMessage.textContent = `💥 Time's up! You reached ${getCount()}. Try again!`;
    }
    setTimeout(() => {
      gameMessage.textContent = "";
      timeLeft = 15;
      target = 10;
      setProgress(0);
      updateDisplay();
    }, 3000);
  }
}

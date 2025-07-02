import { getCount, setCount } from "./counter.js";
import { updateDisplay } from "./ui.js";

let autoInterval = null;

export function setupAutoCounter() {
  const autoButton = document.getElementById("auto");
  autoButton.addEventListener("click", () => {
    if (autoInterval) {
      clearInterval(autoInterval);
      autoInterval = null;
      autoButton.textContent = "Start Auto";
    } else {
      autoInterval = setInterval(() => {
        setCount(getCount() + 1);
        updateDisplay();
      }, 1000); // Increment every second
      autoButton.textContent = "Stop Auto";
    }
  });
}

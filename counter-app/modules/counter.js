import { confirmMessage } from "./confirm.js";
import { updateDisplay } from "./ui.js";
import { saveCount, restoreCount } from "./storage.js";

let count = 0;

export const increaseButton = document.getElementById("increase");
export const decreaseButton = document.getElementById("decrease");
export const countDisplay = document.getElementById("count");


export function getCount() {
  return count;
}

export function setCount(val) {
  count = val;
  saveCount(count);
  updateDisplay();
}

export function setupCounerEvents() {
  increaseButton.addEventListener("click", () => {
    count++;
    setCount(count);
  });

  decreaseButton.addEventListener("click", () => {
    if (count > 0) count--;
    setCount(count);
  });

  countDisplay.addEventListener("dblclick", () => {
    if (count === 0) return;
    const confirmReset = confirm(confirmMessage());
    if (confirmReset) {
      setCount(0);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "+" || e.key === "ArrowRight") {
      count++;
      setCount(count);
    } else if (
      e.key === "ArrowDown" ||
      e.key === "-" ||
      e.key === "ArrowLeft"
    ) {
      if (count > 0) count--;
      setCount(count);
    }
  });
}

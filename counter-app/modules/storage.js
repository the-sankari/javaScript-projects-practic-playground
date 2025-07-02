import { setCount } from "./counter.js";

const KEY = "counterValue";

export function saveCount(count) {
  localStorage.setItem(KEY, count);
}

export function restoreCount() {
  const savedCount = localStorage.getItem(KEY);
  if (savedCount !== null) {
    setCount(parseInt(savedCount, 10));
  } else {
    setCount(0); // Default to 0 if no saved count
  }
}

import { setupAutoCounter } from "./modules/autoCounter.js";
import { setupCounerEvents } from "./modules/counter.js";
import { setupGameMode } from "./modules/gameMode.js";
import { restoreCount } from "./modules/storage.js";
import { updateDisplay } from "./modules/ui.js";

window.addEventListener("load", () => {
  restoreCount();
  updateDisplay();
});

setupCounerEvents();
setupAutoCounter();
setupGameMode();

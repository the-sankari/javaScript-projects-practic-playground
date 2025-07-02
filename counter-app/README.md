# 🧮 JavaScript Project 1 – Counter App

## 🎯 Objective

Build a simple **Counter App** using vanilla JavaScript to practice DOM manipulation, event handling, and core programming logic.

---

## 🧠 Core Concepts Covered

- DOM Selection & Manipulation 
- Event Listeners (`click`)
- Functions and Reusability
- Conditional Logic
- Variable State Management

---

## 🧪 Requirements

Create a web page with the following features:

1. A **number display** that starts at `0`.
2. Three buttons:
   - ➕ **Increment**
   - ➖ **Decrement**
   - 🔁 **Reset**
3. Functional behavior:
   - Clicking Increment increases the counter by `1`.
   - Clicking Decrement decreases the counter by `1`, but **never below 0**.
   - Clicking Reset sets the counter back to `0`.

---

## 💡 Bonus Challenges

Try one or more of the following to level up your skills:

- ✅ Change text **color based on value**:
  - Green if the count is > 0
  - Red if the count is < 0
  - Gray/Black if the count is 0

- ✅ Add a **step size input** so users can choose how much to increment/decrement by.

- ✅ Add a **simple animation** or **sound effect** on button clicks for feedback.


---

## 🧠 BASIC IMPROVEMENTS (Good for Practice)

| Improvement | What to Do | Skill You Learn |
|-------------|------------|-----------------|
| ✅ Save count in `localStorage` | Store `count` using `localStorage.setItem()` and retrieve it on page load | Persistent storage |
| ✅ Disable decrease button at zero | Disable `-` button when `count <= 0` | DOM logic + conditionals |
| ✅ Show last 5 count values | Maintain a `countHistory[]` array and display it in a list | Arrays, DOM rendering |
| ✅ Add reset confirmation modal | Use `confirm()` or build a custom modal before resetting | Event delegation, overlays |
| ✅ Add keyboard shortcuts (`r` to reset, `0` to jump to 0) | Listen to `keydown` events and update count accordingly | Keyboard events + logic |

---

## ✨ UI/UX ENHANCEMENTS (Make it Look Cool)

| Improvement | What to Do | Skill You Learn |
|-------------|------------|-----------------|
| 🎨 Animate count changes (scale/fade) | Add a `.changed` class with CSS animations on update | CSS transitions + JS class toggling |
| 🌗 Light/Dark mode toggle | Add a toggle that switches body class and updates styles | DOM manipulation + theming |
| 🔔 Play sound on count up/down | Use JS Audio API: `new Audio('click.mp3').play()` | Audio APIs |
| 📦 Add a progress bar or meter | Use `<progress>` or styled `<div>` to reflect count range | Visual feedback + dynamic DOM |

---

## 💡 ADVANCED INTERACTIONS (Level Up Logic)

| Feature | What to Do | Concepts Practiced |
|--------|-------------|---------------------|
| ⏱️ Auto counter | Start/stop count increase using `setInterval()` and a toggle button | Timers, state toggling |
| 🧠 Undo button | Push previous values into a stack and pop on undo | Arrays, stack logic |
| 📊 Max/min count limit | Restrict `count` within defined range and disable buttons | State limits, input validation |
| 🕹️ Game mode | Reach a target number within a set time (e.g., 10 in 15s) | Game state, timers |
| 🔢 Set target goal (input) | Use an input field to define the goal and show success state | Form input handling + conditionals |

---


## 🔍 Evaluation Checklist

Before marking this assignment as complete, make sure you:

- [ ] Use semantic and accessible HTML.
- [ ] Properly connect JS to HTML.
- [ ] Use DOM methods to manipulate content and respond to user actions.
- [ ] Prevent counter from going below 0.
- [ ] Structure your functions cleanly.
- [ ] Attempt at least **one bonus challenge**.

---

## 🧭 Suggested Learning Path (Order of Implementation)

1. ✅ Save/load count using `localStorage`
2. ✅ Disable decrease button at 0
3. ✅ Add reset confirmation modal
4. ✅ Implement Undo button
5. ✅ Add keyboard shortcuts
6. ✅ Animate the count on change
7. ✅ Add light/dark mode switch
8. ✅ Play sound on count changes
9. ✅ Add a visual progress bar
10. ✅ Build Game Mode: Reach goal in time
11. ✅ Add Auto-count feature with toggle
12. ✅ Refactor code into small reusable functions

## 🧭 Hints (If You Get Stuck)

- Use `document.querySelector()` or `getElementById()` to select elements.
- Use `addEventListener("click", function)` for the buttons.
- Use a `let count = 0;` variable to hold your counter state.
- Use `textContent` or `innerText` to update the displayed number.

---

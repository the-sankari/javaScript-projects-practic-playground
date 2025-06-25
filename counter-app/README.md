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

## 🔍 Evaluation Checklist

Before marking this assignment as complete, make sure you:

- [ ] Use semantic and accessible HTML.
- [ ] Properly connect JS to HTML.
- [ ] Use DOM methods to manipulate content and respond to user actions.
- [ ] Prevent counter from going below 0.
- [ ] Structure your functions cleanly.
- [ ] Attempt at least **one bonus challenge**.

---

## 🧭 Hints (If You Get Stuck)

- Use `document.querySelector()` or `getElementById()` to select elements.
- Use `addEventListener("click", function)` for the buttons.
- Use a `let count = 0;` variable to hold your counter state.
- Use `textContent` or `innerText` to update the displayed number.

---

## 📂 Folder Structure Suggestion
# 💸 Tip Calculator | Project 3 of 30 JS Projects

A simple and interactive **Tip Calculator** built using **HTML**, **CSS**, and **JavaScript**. This app helps users calculate the total tip and how much each person needs to pay when splitting a bill.

<!-- ![Tip Calculator Screenshot](./screenshot.png) Add screenshot when available -->

## 🚀 Features

- Input the **bill amount**
- Choose a **tip percentage**
- Enter the **number of people**
- Instantly see:
  - Total tip amount 💰
  - Tip per person 👤
  - Total per person 💵
- Responsive design
- Input validation with friendly alerts

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript

## 🧠 What I Learned

- Real-time DOM updates
- Input validation and number formatting
- Basic math logic for percentage calculations
- Handling dynamic UI based on user input

## 📚 Learning Path: Beginner to Advanced

### 🌱 **Beginner Level** (Start Here!)

```javascript
// 1. Variables & Data Types
let billAmount = 100;
const tipPercentage = 0.15;

// 2. Basic Math Operations
let tipAmount = billAmount * tipPercentage;
```

**Key Concepts:**

- Variables (`let`, `const`, `var`)
- Data types (numbers, strings, booleans)
- Basic arithmetic operators
- Console.log for debugging

### 🌿 **Intermediate Level** (Building Skills)

```javascript
// 3. Functions & DOM Manipulation
function calculateTip(bill, percentage) {
  return bill * (percentage / 100);
}

// 4. Event Listeners
document
  .getElementById("calculate")
  .addEventListener("click", handleCalculation);

// 5. Input Validation
if (isNaN(billAmount) || billAmount <= 0) {
  alert("Please enter a valid bill amount");
  return;
}
```

**Key Concepts:**

- Functions and parameters
- DOM selection (`getElementById`, `querySelector`)
- Event handling (`addEventListener`)
- Conditional statements (`if/else`)
- Input validation and error handling

### 🌳 **Advanced Level** (Mastery Path)

```javascript
// 6. Object-Oriented Approach
class TipCalculator {
  constructor() {
    this.billAmount = 0;
    this.tipPercentage = 0;
    this.numberOfPeople = 1;
  }

  calculateResults() {
    // Complex calculations with multiple outputs
  }
}

// 7. Modern JavaScript Features
const tipData = {
  bill: parseFloat(billInput.value) || 0,
  tip: parseInt(tipSelect.value) || 0,
  people: parseInt(peopleInput.value) || 1,
};

// 8. Error Handling & Edge Cases
try {
  const results = this.validateAndCalculate(tipData);
  this.updateUI(results);
} catch (error) {
  this.displayError(error.message);
}
```

**Key Concepts:**

- ES6+ features (arrow functions, destructuring, template literals)
- Classes and object-oriented programming
- Error handling (`try/catch`)
- Code organization and modularity
- Advanced DOM manipulation

### 🚀 **Next Steps & Real-World Skills**

1. **State Management** - Learn how to manage application state
2. **API Integration** - Fetch exchange rates for currency conversion
3. **Local Storage** - Save user preferences
4. **Testing** - Write unit tests for your functions
5. **Build Tools** - Use Webpack, Vite, or similar
6. **Frameworks** - Progress to React, Vue, or Angular

### 💡 **Practice Suggestions**

- **Beginner**: Build a simple calculator
- **Intermediate**: Add multiple tip options and bill splitting
- **Advanced**: Create a full restaurant bill manager with itemized receipts

## 🔧 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/kajol-sutra-dhar/javaScript-projects-practic-playground.git
   ```
2. Navigate to the tip-calculator folder:
   ```bash
   cd javaScript-projects-practic-playground/tip-calculator
   ```
3. Open `index.html` in your browser.
4. Enter the values and view the calculated tips!

## 📁 Project Structure

```
tip-calculator/
│
├── index.html
├── script.js
└── README.md
```

## 📸 Demo

Live  
[Tip Calculator](https://the-sankari.github.io/javaScript-projects-practic-playground/tip-calculator/)

## ✅ Future Improvements

- Add custom tip percentage input
- Include animations on result change
- Add dark mode support 🌙
- Add currency selection
- Include service quality rating system

## 🏆 30 JS Projects Challenge

This is **Project 3 of 30** in my 30 JavaScript Projects Challenge, created to master core JavaScript and frontend logic.

---

**Author:** Kajol Sutra Dhar  
**Portfolio:** [kajol-sutra-dhar.vercel.app](https://kajol-sutra-dhar.vercel.app)  
**Tagline:** #zer0ne | JavaScript ✨ Dom Logic 💡 Clean UI 🧼

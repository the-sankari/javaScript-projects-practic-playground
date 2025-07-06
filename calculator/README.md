# 🧮 Calculator App

A comprehensive JavaScript project that builds a **Calculator** from scratch — evolving from basic DOM manipulation to advanced OOP patterns and modern web features.

<div align="center">
  
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  
  [Live Demo](#) | [Portfolio](https://kajol-sutra-dhar.vercel.app) | [All Projects](https://github.com/the-sankari)
  
</div>

---

## 🎯 Project Goal

Transform a simple calculator idea into a **production-ready web application** using **HTML, CSS, and JavaScript**. This project demonstrates progressive complexity, starting with basic arithmetic and evolving into advanced JavaScript concepts including **OOP**, **ES6 modules**, and **modern web APIs**.

---

## ✨ Features by Development Phase

### 🟢 Phase 1: Foundation (Beginner)

> **Status:** ✅ Complete

- ✅ **Responsive UI Design** - Mobile-first, grid-based layout
- ✅ **Core Arithmetic Operations** - Addition, subtraction, multiplication, division
- ✅ **Interactive Display** - Real-time input/output updates
- ✅ **Basic Controls** - Clear (C) and Equals (=) functionality
- ✅ **Error Handling** - Division by zero, invalid operations

### 🟡 Phase 2: Enhanced Functionality (Intermediate)

> **Status:** 🚧 In Progress

- [ ] **Decimal Precision** - Support for floating-point calculations
- [ ] **Keyboard Navigation** - Full keyboard support with shortcuts
  - `Enter` for equals, `Escape` for clear, `Backspace` for delete
- [ ] **Sign Toggle** - Positive/negative number switching (+/-)
- [ ] **Number Formatting** - Thousand separators, scientific notation
- [ ] **Memory Functions** - M+, M-, MR, MC operations

### 🔵 Phase 3: Advanced Architecture (Advanced)

> **Status:** 📋 Planned

- [ ] **Object-Oriented Refactor** - Calculator class with proper encapsulation
- [ ] **ES6 Module System** - Separated concerns and clean imports
- [ ] **Theme System** - Light/Dark mode with CSS custom properties
- [ ] **Interactive Feedback** - Button animations, sound effects
- [ ] **History Log** - Calculation history with undo/redo

### 🟣 Phase 4: Production Features (Expert)

> **Status:** 📋 Planned

- [ ] **Persistent Storage** - LocalStorage for settings and history
- [ ] **Progressive Web App** - Offline support, installable
- [ ] **Unit Testing Suite** - Jest/Vitest testing framework
- [ ] **Performance Optimization** - Code splitting, lazy loading
- [ ] **Accessibility Compliance** - WCAG 2.1 AA standards

---

## 📁 Project Architecture

```
calculator-app/
├── 📄 index.html          # Main HTML structure
├── 🎨 styles/
│   ├── main.css           # Core styles and layout
│   ├── themes.css         # Light/dark theme variables
│   └── animations.css     # Button and UI animations
├── 🧠 scripts/
│   ├── calculator.js      # Main calculator logic (OOP)
│   ├── ui.js             # DOM manipulation and events
│   ├── utils.js          # Helper functions and formatters
│   └── constants.js      # Configuration and constants
├── 🧪 tests/
│   └── calculator.test.js # Unit tests
├── 📱 manifest.json       # PWA configuration
└── 📖 README.md          # Project documentation
```

---

## 🛠️ Technical Implementation

### Core Technologies

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Grid/Flexbox layout, custom properties, animations
- **Vanilla JavaScript** - ES6+ features, OOP patterns, modules

### Key JavaScript Concepts Demonstrated

- **DOM Manipulation** - Event delegation, dynamic content updates
- **Event Handling** - Keyboard, mouse, and touch events
- **Object-Oriented Programming** - Classes, inheritance, encapsulation
- **Functional Programming** - Pure functions, immutability
- **Error Handling** - Try-catch blocks, input validation
- **Modern JS Features** - Arrow functions, destructuring, modules
- **Web APIs** - LocalStorage, Service Workers (PWA phase)

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/the-sankari/javaScript-projects-practic-playground.git
   cd javaScript-projects-practic-playground/calculator
   ```

2. **Open in your preferred editor**

   ```bash
   code .  # VS Code
   # or open index.html directly in browser
   ```

3. **Start development**
   - Open `index.html` in browser
   - Use Live Server extension for hot reload

### Usage Examples

```javascript
// Basic arithmetic
"2 + 3 = 5";
"10 ÷ 2 = 5";

// Decimal operations
"3.14 × 2 = 6.28";

// Error handling
"5 ÷ 0 = Error";
```

---

## 🧪 Testing

Run the test suite:

```bash
npm test                    # Run all tests
npm run test:watch         # Watch mode for development
npm run test:coverage      # Generate coverage report
```

---

## 🎨 Customization

### Adding New Themes

```css
:root[data-theme="custom"] {
  --primary-color: #your-color;
  --background: #your-bg;
  --text-color: #your-text;
}
```

### Extending Functionality

```javascript
class ScientificCalculator extends Calculator {
  sin(value) {
    return Math.sin(value);
  }
  cos(value) {
    return Math.cos(value);
  }
  // Add more scientific functions
}
```

---

## 🤝 Contributing

This project welcomes contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Ideas

- 🧮 Scientific calculator functions (sin, cos, tan, log)
- 🎵 Sound effects and haptic feedback
- 🌍 Internationalization (i18n) support
- ♿ Enhanced accessibility features
- 📱 Mobile app version (React Native/Flutter)

---

## 📈 Learning Outcomes

By completing this project, you'll master:

- ✅ **DOM Manipulation** - Dynamic UI updates and event handling
- ✅ **JavaScript Fundamentals** - Variables, functions, conditionals, loops
- ✅ **Object-Oriented Programming** - Classes, inheritance, polymorphism
- ✅ **Modern JavaScript** - ES6+ syntax, modules, async programming
- ✅ **Web Standards** - Accessibility, responsive design, performance
- ✅ **Testing** - Unit tests, integration tests, TDD methodology
- ✅ **Deployment** - GitHub Pages, Vercel, Netlify

---

## 🧑‍💻 Author

<div align="center">
  
  **Kajol Sutra Dhar**  
  *Full-Stack Developer & JavaScript Enthusiast*
  
  [![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://kajol-sutra-dhar.vercel.app)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/the-sankari)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
  
</div>

---

## 💡 Pro Tips for Learners

> 🎯 **Start Small, Think Big**: Begin with basic arithmetic, then gradually add features. Each enhancement teaches new concepts.

> 🔄 **Refactor Regularly**: As you learn new patterns, revisit earlier code. This reinforces learning and improves code quality.

> 🧪 **Test Everything**: Write tests for each feature. It prevents bugs and teaches you to think about edge cases.

> 📚 **Document Your Journey**: Keep notes about what you learned. It helps with retention and creates a valuable reference.

---

## 🔗 Related Projects

Part of the **30 JavaScript Projects Challenge**:

- [To-Do List App](../todo-app) - DOM manipulation and local storage
- [Weather App](../weather-app) - API integration and async JavaScript
- [Quiz Game](../quiz-game) - Object-oriented programming
- [Expense Tracker](../expense-tracker) - Data management and charts

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Free for educational and commercial use** ✅

---

<div align="center">
  
  **⭐ Star this repo if it helped you learn!**
  
  Made with ❤️ and lots of ☕
  
</div>

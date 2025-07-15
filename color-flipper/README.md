# 🎨 Color Flipper

A simple and interactive web application that generates random background colors with a single click. Built with vanilla HTML, CSS, and JavaScript.

## 🌟 Features

- **Random Color Generation**: Generates random hex colors on button click
- **Smooth Transitions**: Beautiful CSS transitions for color changes
- **Modern UI**: Glass-morphism design with hover effects
- **Color Code Display**: Shows the current hex color code
- **Responsive Design**: Works on all device sizes

## 🚀 Live Demo

Open `index.html` in your browser to see the Color Flipper in action!

## 📁 File Structure

```
color-flipper/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling, animations, and glass-morphism effects
- **Vanilla JavaScript**: Random color generation and DOM manipulation

## 🎯 How It Works

1. Click the "Click Me!" button
2. JavaScript generates a random hex color using the format `#RRGGBB`
3. The background color smoothly transitions to the new color
4. The hex color code is displayed on screen

## 🔧 Code Highlights

### Random Color Generation

```javascript
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
```

### Smooth Color Transition

```css
body {
  transition: background-color 0.3s ease;
}
```

### Glass-morphism Effect

```css
.container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## 📱 Responsive Design

The Color Flipper is fully responsive and works seamlessly on:

- Desktop computers
- Tablets
- Mobile phones

## 🎨 Color System

- Generates **16,777,216** possible colors (256³)
- Uses hexadecimal color notation
- Includes smooth CSS transitions
- Displays color codes for reference

## 🚀 Getting Started

1. Clone or download the project
2. Open `index.html` in your web browser
3. Click the button to generate random colors!

## 🔮 Future Enhancements

- [ ] Add RGB and HSL color format options
- [ ] Include color history/favorites
- [ ] Add color palette generation
- [ ] Include accessibility features
- [ ] Add sound effects
- [ ] Create color name lookup

## 📚 Learning Outcomes

This project demonstrates:

- DOM manipulation with JavaScript
- Event handling
- CSS transitions and animations
- Random number generation
- Modern CSS techniques (glass-morphism)
- Responsive web design

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Kajol Sutra Dhar**

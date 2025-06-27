# ✅ JavaScript Project 2 – To-Do List App

## 🎯 Objective

Build a dynamic **To-Do List App** using vanilla JavaScript to practice DOM manipulation, arrays, and event handling. You’ll create, delete, and mark tasks as completed.

---

## 🧠 Core Concepts Covered

- Arrays and dynamic data structures
- DOM event delegation
- Creating/removing/updating elements
- `classList` manipulation
- Basic project structure (HTML/CSS/JS separation)

---

## 🧪 Requirements

Create a working to-do list app with the following features:

1. **Input field** to enter a new task
2. **Add button** to submit the task
3. **Task list display** with:
   - Task name
   - Checkbox or “Mark as done” button
   - Delete button

4. Functional Behavior:
   - Tasks should be added to a list on the page.
   - Clicking “Mark as done” should **toggle a completed state** (e.g., strike-through style).
   - Clicking “Delete” should **remove** the task from the list.

---

## 💡 Bonus Challenges

- ✅ Store tasks in **localStorage** so they persist after refreshing the page.
- ✅ Add a **filter**: All / Completed / Pending
- ✅ Allow editing a task after adding it (click to edit)
- ✅ Add task time stamps or due dates

---

## 🔍 Evaluation Checklist

Before marking this assignment complete, make sure:

- [ ] You can add multiple tasks without reload
- [ ] Tasks can be marked complete and toggled back
- [ ] Tasks can be removed from the list
- [ ] You are using an array to store task data
- [ ] Bonus: You tried at least **one extra feature**

---

## 🧭 Hints

- Use an empty array like `let todos = []` to manage task data.
- Use `Array.push()` when adding and `Array.filter()` when deleting.
- Loop through your array with `forEach()` to render the task list.
- Use `innerHTML` or `createElement` to build task list items dynamically.
- Add a `.completed` class for styling done tasks.

---

## 📂 Suggested Folder Structure
todo-app/
├── index.html
├── style.css
└── script.js
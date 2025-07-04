"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

let todos = []; // This will store the todo items

const addTodoButton = document.getElementById("add-todo");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to render todos
const renderTodos = () => {
  todoList.innerHTML = ""; // Clear the list first
  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.text; // Set the text of the todo item
    todoItem.className = "todo-item";

    // Add a class to indicate if the todo is completed
    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    // ✅ Toggle Status Button
    const statusToggleButton = document.createElement("button");
    statusToggleButton.textContent = "Toggle Status";
    statusToggleButton.className = "toggle-status";
    statusToggleButton.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    // Add a button to toggle the status of the todo item
    const deleteTodoButton = document.createElement("button");
    deleteTodoButton.textContent = "Delete";
    deleteTodoButton.className = "delete-todo";
    deleteTodoButton.addEventListener("click", () => {
      // Function to delete todo item
      deleteTodo(todoItem, index);
    });

    // Append the buttons to the todo item
    todoItem.appendChild(statusToggleButton);
    // Append the delete button to the todo item
    todoItem.appendChild(deleteTodoButton);

    // Append the todo item to the list
    todoList.appendChild(todoItem);
  });
};

const saveTodos = () => {
  // This function can be used to save todos to local storage or a server
  localStorage.setItem("todos", JSON.stringify(todos)); // Save todos to local storage
  console.log("Todos saved:", todos);
};

// Load todos from local storage on page load
const loadTodos = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos); // Parse the stored todos
    console.log("Todos loaded:", todos);
    renderTodos(); // Render the loaded todos
  }
};

// Function to delete todo item

const deleteTodo = (todoItem, index) => {
  todos.splice(index, 1); // Remove the todo from the array
  saveTodos(); // Save the updated todos
  console.log("Todo deleted:", index);
  renderTodos(); // Re-render the list
};

// Function to display todos

const displayTodos = () => {
  const todoText = todoInput.value.trim();
  if (!todoText) {
    alert("Please enter a todo item.");
    return;
  }
  todos.push({ text: todoText, completed: false }); // Add the new todo item
  // The completed property is set to false by default
  console.log("Todo added:", todoText);
  todoInput.value = ""; // Clear the input field
  saveTodos(); // Save the updated todos
  console.log("Todo added:", todoText);
  renderTodos(); // Re-render the list
};

addTodoButton.addEventListener("click", () => {
  displayTodos();
});

// Load todos when the page is ready
loadTodos();

"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

// Constants for messages
const ADD_TODO_SUCCESS = "Todo added successfully!";
const ADD_TODO_ERROR = "Please enter a valid todo item.";
const DELETE_TODO_SUCCESS = "Todo deleted successfully!";
const EDIT_TODO_SUCCESS = "Todo edited successfully!";
const TOGGLE_TODO_SUCCESS = "Todo status toggled successfully!";
const NO_TODOS_MESSAGE = "No todos available. Add some!";

// Data storage
let todos = [];

// DOM elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
const todoMessageDiv = document.getElementById("todo-message");

// Function to render the todo list

const renderTodos = () => {
  todoList.innerHTML = "";

  if (todos.length === 0) {
    todoList.innerHTML = "<p>No todos available. Add some!</p>";
    return;
  }

  todos.forEach((todo, index) => {
    const todoItem = createTodoElement("li", "todo-item", todo.text);
    todo.completed
      ? todoItem.classList.add("completed")
      : todoItem.classList.remove("completed");
    const deleteTodoButton = createTodoElement(
      "button",
      "delete-todo",
      "Delete"
    );
    const editTodoButton = createTodoElement("button", "edit-todo", "Edit");
    const toggleTodoButton = createTodoElement(
      "button",
      "toggle-todo",
      todo.completed ? "Todo" : "Done"
    );
    deleteTodoButton.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos();
      todoMessage(DELETE_TODO_SUCCESS, "success");
    });

    toggleTodoButton.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderTodos();
      todoMessage(TOGGLE_TODO_SUCCESS, "info");
    });

    todoItem.appendChild(deleteTodoButton);
    todoItem.appendChild(editTodoButton);
    todoItem.appendChild(toggleTodoButton);
    todoList.appendChild(todoItem);
  });
  console.log("Todos rendered:", todos);
  if (todos.length === 0) {
    todoList.innerHTML = `<p>${NO_TODOS_MESSAGE}</p>`;
  }
  console.log("Todos saved to local storage:", todos);
};

const saveTodosToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const loadTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  } else {
    todos = [];
  }
  console.log("Todos loaded from local storage:", todos);
};

const createTodoElement = (tag, className, textcontent) => {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = textcontent;
  return element;
};

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    todoMessage(ADD_TODO_ERROR, "error");
    return;
  }
  const newTodo = {
    text: todoText,
    completed: false,
    isEditing: false,
  };
  todos.push(newTodo);
  saveTodosToLocalStorage();
  console.log("Todos after adding:", todos);
  // Clear the input field and re-render the list
  todoInput.value = "";
  renderTodos();
  todoMessage(ADD_TODO_SUCCESS, "success");
  todoInput.focus();
  console.log("Todo added:", newTodo);
};

const todoMessage = (message, type) => {
  const messageDiv = createTodoElement("div", `t${type}`, message);
  if (type === "error") {
    messageDiv.style.color = "red";
  } else if (type === "success") {
    messageDiv.style.color = "green";
  } else if (type === "info") {
    messageDiv.style.color = "skyblue";
  }
  todoMessageDiv.appendChild(messageDiv);
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
};

addTodoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Load todos from local storage on page load
loadTodosFromLocalStorage();
// Initial render
renderTodos();

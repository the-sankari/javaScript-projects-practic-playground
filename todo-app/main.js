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
    if (todo.isEditing) {
      const editInput = createInputElement("edit-todo-input", todo.text);
      const saveButton = createTodoElement("button", "save-todo", "Save");
      const cancelButton = createTodoElement("button", "cancel-todo", "Cancel");

      editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          saveEditedTodo(index, editInput.value);
        } else if (e.key === "Escape") {
          cancelEditingTodo(index);
        }
      });
      saveButton.addEventListener("click", () => {
        saveEditedTodo(index, editInput.value);
      });
      cancelButton.addEventListener("click", () => {
        cancelEditingTodo(index);
      });
      todoItem.innerHTML = ""; // Clear the todo item
      todoItem.appendChild(editInput);
      todoItem.appendChild(saveButton);
      todoItem.appendChild(cancelButton);
      console.log("Editing todo:", todo.text);
    } else {
      todoItem.textContent = todo.text; // Set the text content for non-editing todos
      if (todo.completed) {
        todoItem.classList.add("completed");
      }

      const editTodoButton = createTodoElement("button", "edit-todo", "Edit");

      const deleteTodoButton = createTodoElement(
        "button",
        "delete-todo",
        "Delete"
      );
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

      editTodoButton.addEventListener("click", () => {
        startEditingTodo(index);
      });

      todoItem.appendChild(deleteTodoButton);
      todoItem.appendChild(editTodoButton);
      todoItem.appendChild(toggleTodoButton);
    }
    todoList.appendChild(todoItem);
  });
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

const createInputElement = (className, value) => {
  const input = document.createElement("input");
  input.className = className;
  input.type = "text";
  input.value = value;
  return input;
};

// Function to add a new todo

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
  // Clear the input field and re-render the list
  todoInput.value = "";
  renderTodos();
  todoMessage(ADD_TODO_SUCCESS, "success");
  todoInput.focus();
  console.log("Todo added:", newTodo);
};

const startEditingTodo = (index) => {
  todos.forEach((todo, i) => (todo.isEditing = i === index));
  renderTodos();
};

const saveEditedTodo = (index, newText) => {
  const trimmedTodoText = newText.trim();
  if (!trimmedTodoText) {
    todoMessage(ADD_TODO_ERROR, "error");
    return;
  }
  const isDuplicate = todos.some(
    (todo, i) =>
      i !== index && todo.text.toLowerCase() === trimmedTodoText.toLowerCase()
  );
  if (isDuplicate) {
    todoMessage("This todo already exists.", "error");
    return;
  }
  todos[index].text = trimmedTodoText;
  todos[index].isEditing = false;
  saveTodosToLocalStorage();
  todoMessage(EDIT_TODO_SUCCESS, "success");
  renderTodos();
  console.log("Todo edited:", todos[index]);
};

const cancelEditingTodo = (index) => {
  todos[index].isEditing = false;
  renderTodos();
  todoMessage("Editing cancelled.", "info");
  console.log("Editing cancelled for todo:", todos[index]);
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

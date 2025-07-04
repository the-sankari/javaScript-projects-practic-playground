"use strict";

import loadUniversalNavbar from "../js/universalNavbar.js";

// Load the universal navbar (it will auto-detect the correct path)
loadUniversalNavbar();

// Data storage
let todos = [];

// DOM elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");


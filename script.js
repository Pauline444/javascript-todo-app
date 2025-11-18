'use strict';

const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const ul = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});


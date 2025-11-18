'use strict';

const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const ul = document.getElementById('todo-list');

let allTodos = [];

todoForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});

// trim tar bort oönskade mellanslag
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0) {
        allTodos.push(todoText);
        console.log(allTodos);
        todoInput.value = '';
    }
};
